var request = require('request')
var cheerio = require('cheerio')
var iconv = require('iconv-lite'); //引入模块
var fs = require('fs')
var xlsx = require('node-xlsx')//获取表格
var http2 = require('http2');

function writeXls(datas,index) {
  var buffer = xlsx.build([
      {
          name:'sheet'+index,
          data:datas   
      }
  ]);
  fs.writeFileSync('test2.xlsx',buffer,{'flag':'w'});   //生成excel
}


const server = http2.createSecureServer(options);
server.on('error', (err) => console.error(err));

function getHead(fd, path,callBack) {
  fs.fstat(fd, function (err,stat) {
      if (err) {
          stream.end('notFound');
          return;
      }
      const head = {
        'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "accept-encoding": "gzip, deflate",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cache-control":"max-age=0",
        'pragma': "no-cache",
        "proxy-connection": "keep-alive",
        "upgrade-insecure-requests": 1,
        "user-agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
        'content-type': "application/json;charset=UTF-8"
      };
      callBack(head);
  });
}


":authority":"s.taobao.com",
":scheme":"https",
":path":`/list?data-key=s&data-value=60&ajax=true&_ksTS=1563432474951_482&callback=jsonp483&spm=a217f.8051907.312344.11.66763308Om6l0w&q=%E9%9B%AA%E7%BA%BA%E8%A3%99&cat=16&style=grid&
        seller_type=taobao&bcoffset=0`









var list = []
var datas = [];

let cookie = `__guid=154677242.1057699480706783200.1550041908135.1301; enc=tB53oEQPeRRvc58MlfihjvHXmIIupdy7WZFw2HX85AlDiqlb%2BGGIetKHHY5pSwjMHiWrSmkEqRNHB91UtTbMkw%3D%3D; thw=cn; t=9049a4ce276e123c62ec5aab9e100733; UM_distinctid=16a631d0513472-035248ae5ae926-454c092b-1fa400-16a631d05145fe; cna=sgaWFJIeXhACAX1GTaXhsR4/; hng=CN%7Czh-CN%7CCNY%7C156; miid=1296865639595200126; tracknick=%5Cu840C%5Cu840C_%5Cu840C%5Cu840C%5Cu7684%5Cu4E16%5Cu754C; lgc=%5Cu840C%5Cu840C_%5Cu840C%5Cu840C%5Cu7684%5Cu4E16%5Cu754C; tg=0; uc3=vt3=F8dBy34Q7WwUQjdDtkc%3D&id2=UUpgTsxJh8ILNg%3D%3D&nk2=oHJX52YXPqUcxDXDn7UI&lg2=U%2BGCWk%2F75gdr5Q%3D%3D; _cc_=V32FPkk%2Fhw%3D%3D; mt=ci=-1_0; x=e%3D1%26p%3D*%26s%3D0%26c%3D0%26f%3D0%26g%3D0%26t%3D0; v=0; cookie2=58b29966aedb94c98420ebb508512437; _tb_token_=fdb33b1551eee; alitrackid=www.taobao.com; lastalitrackid=www.taobao.com; swfstore=211410; _uab_collina=156343006467017692074014; x5sec=7b227365617263686170703b32223a226234663833336364353539373735326364346238343730363266626634343139434e5772774f6b46454a697376767276387243632f514561444449794d5467314e7a6b314f5463374d513d3d227d; uc1=cookie14=UoTaG7u43JgLcw%3D%3D; isg=BHZ2nce5N_Em8MLgd2CX-vNbx6y4P99ao3RQNuBfSdn0Ixa9SCTJ4d3SP7_qi7Lp; l=cBLbUVLIvZwLY4M_BOCwNuI8SM_TAIRAguPRwjZDi_5Ba6T1fOQOkqnZzF96cjWd9hLB4KzBhYp9-etk2UMqWXSpXUJ1.; 
JSESSIONID=703EDA2115D5EE33E40A1A5D2F81236D; monitor_count=32`

//获取热门电影
var request = request.defaults({jar: true})
var j = request.jar()
j.setCookie(cookie, function (err, cookie){})
function getHotMovies(url,index) {
  request({url,encoding: null,j,
    headers: {//设置请求头
      "content-type": "application/json;charset=UTF-8",
      // 'set-cookie':'JSESSIONID=A2C89AD3B3BDF616E8A4FBEE587462C4; Path=/; HttpOnly',
      // 'eagleeye-traceid':'0bfa221315634324653984633e4076',
      // 'content-encoding':'gzip',
      // 'content-language':'zh-CN',
      ":authority":"s.taobao.com",
      'accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "accept-encoding": "gzip, deflate",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "cache-control":"max-age=0",
      'pragma': "no-cache",
      "proxy-connection": "keep-alive",
      "upgrade-insecure-requests": 1,
      "user-agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
      
      ":scheme":"https",
      ":path":`/list?data-key=s&data-value=60&ajax=true&_ksTS=1563432474951_482&callback=jsonp483&spm=a217f.8051907.312344.11.66763308Om6l0w&q=%E9%9B%AA%E7%BA%BA%E8%A3%99&cat=16&style=grid&
      seller_type=taobao&bcoffset=0`
    },
    gzip:false}, function (err,res, body) {
    if (!err && res.statusCode == 200) {
      console.info(res.headers)

      $ = cheerio.load(iconv.decode(body, 'utf-8'));    
      // $ = cheerio.load(body)
      console.info(iconv.decode(body, 'utf-8'))

      var content = $('#listsrp-itemlist .item')
      var length = content.length
      console.info(length)

      while (length -- ) {
        var title = $('#listsrp-itemlist .item .J_ClickStat').eq(length).text()
        var xiaoquName = $('#listsrp-itemlist .item .ctx-box strong').eq(length).text()
        var xiaoquAddr = $('#listsrp-itemlist .item .pic-box img').eq(length).attr('src')

        var arr = [title,xiaoquName,xiaoquAddr]
        datas.push(arr)
        title && list.push(`名字：${title}》》》小区名称：${xiaoquName}》》》小区地址：${xiaoquAddr}\r\n`)
      }


      writeXls(datas,index);

      
      // console.info('热门电影有',list)
      fs.writeFile('test2.txt',list,(err)=>{
        if (err) throw err;
        console.log('文件已被保存',index);
      })
    } else {
      console.info('网页加载失败',err)
    }
    
  })
  
}

getHotMovies('https://s.taobao.com/list?data-key=s&data-value=60&ajax=true&_ksTS=1563432474951_482&callback=jsonp483&spm=a217f.8051907.312344.11.66763308Om6l0w&q=%E9%9B%AA%E7%BA%BA%E8%A3%99&cat=16&style=grid&seller_type=taobao&bcoffset=0',1)
// for (let index = 1; index < 80; index++) {

//   getHotMovies('https://cd.esf.fang.com/integrate/i3'+index+'/',index)
//   getHotMovies('https://s.taobao.com/list?spm=a217f.8051907.312344.11.66763308Om6l0w&q=%E9%9B%AA%E7%BA%BA%E8%A3%99&cat=16&style=grid&seller_type=taobao&bcoffset=0&s='+index*60,index)
// }

// https://s.taobao.com/list?spm=a217f.8051907.312344.11.66763308Om6l0w&q=%E9%9B%AA%E7%BA%BA%E8%A3%99&cat=16&style=grid&seller_type=taobao&bcoffset=0&s=0
// https://s.taobao.com/list?data-key=s&data-value=60&ajax=true&_ksTS=1563432474951_482&callback=jsonp483&spm=a217f.8051907.312344.11.66763308Om6l0w&q=%E9%9B%AA%E7%BA%BA%E8%A3%99&cat=16&style=grid&seller_type=taobao&bcoffset=60

// https://s.taobao.com/list?spm=a217f.8051907.312344.11.66763308Om6l0w&q=%E9%9B%AA%E7%BA%BA%E8%A3%99&cat=16&style=grid&seller_type=taobao
// https://s.taobao.com/list?spm=a217f.8051907.312344.11.66763308Om6l0w&q=%E9%9B%AA%E7%BA%BA%E8%A3%99&cat=16&style=grid&seller_type=taobao&bcoffset=0&s=60
// https://s.taobao.com/list?spm=a217f.8051907.312344.11.66763308Om6l0w&q=%E9%9B%AA%E7%BA%BA%E8%A3%99&cat=16&style=grid&seller_type=taobao&bcoffset=0&s=120