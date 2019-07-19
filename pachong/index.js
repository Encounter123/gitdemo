var request = require('request')
var cheerio = require('cheerio')
var iconv = require('iconv-lite'); //引入模块
var fs = require('fs')
var xlsx = require('node-xlsx')//获取表格

function writeXls(datas,index) {
  var buffer = xlsx.build([
      {
          name:'sheet'+index,
          data:datas   
      }
  ]);
  fs.writeFileSync('test1.xlsx',buffer,{'flag':'w'});   //生成excel
}


var list = []
var datas = [];
//获取热门电影
function getHotMovies(url,index) {
  request({url,encoding: null, gzip:true}, function (err,res, body) {
    if (!err && res.statusCode == 200) {
      $ = cheerio.load(iconv.decode(body, 'GBK'));    

      var content = $('.shop_list .tit_shop')
      var length = content.length
      // console.info(length)

      while (length -- ) {
        var title = $('.shop_list .tit_shop').eq(length).text()
        var xiaoquName = $('.shop_list .add_shop a').eq(length).text().replace(/\s/g,"");
        var xiaoquAddr = $('.shop_list .add_shop span').eq(length).text()

        var arr = [title,xiaoquName,xiaoquAddr]
        datas.push(arr)
        title && list.push(`名字：${title}》》》小区名称：${xiaoquName}》》》小区地址：${xiaoquAddr}\r\n`)
      }


      writeXls(datas,index);

      
      // console.info('热门电影有',list)
      fs.writeFile('test.txt',list,(err)=>{
        if (err) throw err;
        console.log('文件已被保存',index);
      })
    } else {
      console.info('网页加载失败',err)
    }
    
  })
  
}

getHotMovies('https://cd.esf.fang.com/integrate',1)
for (let index = 2; index < 80; index++) {
  getHotMovies('https://cd.esf.fang.com/integrate/i3'+index+'/',index)
}



// getHotMovies('https://movie.douban.com/')
// getHotMovies('http://www.xinfadi.com.cn/')
// for (let index = 2; index < 10; index++) {
//   // const element = array[index];
//   console.log('https://nanchong.esf.fang.com/house/i3'+index+'/')
//   getHotMovies('https://nanchong.esf.fang.com/house/i3'+index+'/')
// }
//cdnsfb.soufunimg.com/viewimage/1/2019_7/15/M9/55/bd2850a949654a07836929e41cc512da/690x440c.jpg
//cdnsfb.soufunimg.com/viewimage/1/2019_7/15/M9/55/bd2850a949654a07836929e41cc512da/120x78c.jpg