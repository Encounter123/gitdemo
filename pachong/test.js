var request = require('request');
var cheerio = require('cheerio')
var iconv = require('iconv-lite'); //引入模块
var fs = require('fs')
var xlsx = require('node-xlsx')//获取表格

var Topindex = 1

var headers = {
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'referer': 'https://s.taobao.com/search/_____tmd_____/verify/?nc_token=cd6650fcec65aafa27666a4a3c1688c7&nc_session_id=0136h8om3q5bLki_ExlqBlUS60jGdHroipJteWXIfTL_YVhMofVt2Cw0Rgvm_Bz6-ZN8HPWMx6QlMWV-Nw9LKhFln6-0AXmw2z9nEi93BnEETLK_5jkBorkYAcqnh_XYaqWuWG0mV-a-DvE0pTXq6UJzeagecKV3_fbyDJFmMMda9Gn-gwOELXRwI79faMGTxFHvJG0DpdSHZOdyTDPcKc6A&nc_sig=05GpvesdJBVOhMKscmy0iTGVDhDcartZBI8_OhtG395T3PSxzyZwGyAoHHeGwEYA5-AtlUmgiELeKlFh_5TXRP20YzjIHA1IA5Adh4UIL5agqoolpuFBvZsHwxPfn0mLWq8ukCMLp6HOZ2BSETGuNd4TnssKKbMOf6UQzuS0zt2aCVTBWtlJXx3mxt-G_kMt90hzIiGJzKxLpS1LnjuS6F8jnEPs_3D0-lJiwaplLuVDYw5sdMnRICAKcmz6BNQgIWgM328ipgwaBS0RswNsstSw4i27GuhH6ngF7lLWFCfZj6_1L4lvqAx25LM2Tin_MGdXxH5yNP9qr_zDPI2kztLEB0VESqjnwGcZ4Ovek3EkEo2o3GOxbowBqfBsLfhdzrptEz9By6HpYZYf1rinUloFsAxQHojeOF39MSL4bxBD6DfIc2AzCzKCmJ55WHXkF1s96IsoRVu_0-_HtNgnUdRi-ezyLl12sTvnDX542Pzls&x5secdata=5e0c8e1365474455070961b803bd560607b52cabf5960afff39b64ce58073f78f68ede033dd239842063c29628191423866f9620b863c667132a90ce579d5cd7be8e192b7447cd67137e0609138f491aa10be9144e161821cdfcccdb07dd950f45cb0ce36cef9f62cbd52852a03cf8ba461ee819ca12264cfd380e1ff9a31817085bc9673d9dc3375cabfadd668607185900f17b3338c3173ac60322145c36b1544d305436aa25e21e2365a255c9f3fc79a52a883b8d79c21b1904b01749f64ff68ede033dd239842063c29628191423f26a33fc19185ca7f5ba435d1801cd572229ba3593585f1b7d03839620015ce5a68b0e67f838234417135b0cea4e94213b76d313ff08d9198c95dfd14d23a93fa3b3e7b92e7a104a939356775160b150867edf2f8240ab229f58799417bab5d0ffe555c1c5678185234c520701a92193980b36a529e62eae55721c5422e06f49cb4465f39e6c65e6f39b86939ab2ecdd70cece8c38868f6e7a827bb6f8dd32b022f788b285fd2c39c11b5b58fac70b7413803cbbe0839c2107b46ad9fb255cd9b743d934621622659dc17f7c03b6bf0a7e6e23677852734d7223bd342bf6e2c20ea591d48a4de851145f164165a8a582a4bc769aaa71d5800b20ad0a8af7fd9f0d93b79a6790078a4fccefdb8e1b06ad14e6445556e800a1b6a310c13cfa69ea53628ad09380755c0e60b76d500e24694802e67050ed7afca9c27fa872db115b64e562381f55b36d57bef0a7208d325d3123cecd72a2c0fbe78d44e02dc747d4bfec2900ad20df5c2feda956ce3fbf307bdfe8eddefe28b6f290ed12f6fb65325d9a678964b11679bf2531504047e854&x5step=100&nc_app_key=X82Y__2ec484ab2f20befbd6f0aadd26b8bc5b',
    'authority': 's.taobao.com',
    'cookie': '__guid=154677242.1057699480706783200.1550041908135.1301; enc=tB53oEQPeRRvc58MlfihjvHXmIIupdy7WZFw2HX85AlDiqlb%2BGGIetKHHY5pSwjMHiWrSmkEqRNHB91UtTbMkw%3D%3D; thw=cn; t=9049a4ce276e123c62ec5aab9e100733; UM_distinctid=16a631d0513472-035248ae5ae926-454c092b-1fa400-16a631d05145fe; cna=sgaWFJIeXhACAX1GTaXhsR4/; hng=CN%7Czh-CN%7CCNY%7C156; miid=1296865639595200126; tracknick=%5Cu840C%5Cu840C_%5Cu840C%5Cu840C%5Cu7684%5Cu4E16%5Cu754C; lgc=%5Cu840C%5Cu840C_%5Cu840C%5Cu840C%5Cu7684%5Cu4E16%5Cu754C; tg=0; uc3=vt3=F8dBy34Q7WwUQjdDtkc%3D&id2=UUpgTsxJh8ILNg%3D%3D&nk2=oHJX52YXPqUcxDXDn7UI&lg2=U%2BGCWk%2F75gdr5Q%3D%3D; _cc_=V32FPkk%2Fhw%3D%3D; x=e%3D1%26p%3D*%26s%3D0%26c%3D0%26f%3D0%26g%3D0%26t%3D0; v=0; cookie2=58b29966aedb94c98420ebb508512437; _tb_token_=fdb33b1551eee; alitrackid=www.taobao.com; lastalitrackid=www.taobao.com; swfstore=211410; _uab_collina=156343006467017692074014; _m_h5_tk=7a69137ae49a4399dfee8bfc88ce2eae_1563511243257; _m_h5_tk_enc=0ee3b3d93e130888805f96e7675666b7; mt=ci=-1_0; JSESSIONID=A8DDAD3516BB896B9536754514B739BF; uc1=cookie14=UoTaG7rx15uFGA%3D%3D; x5sec=7b227365617263686170703b32223a223161613232346139623661383865663133383938653732656663323464333535434c446878656b46454b573573642b45393757324d786f4d4d6a49784f4455334f5455354e7a737a227d; isg=BOHh3QxWGIGfc7UB1MlIK2CS8K07JjAL0K1Hl0O27OhHqgB8i9xRUPLrDJ6JYu24; l=cBLbUVLIvZwLYe55BOCNNuI8SM_OJIRfguPRwjZDi_5Ql6L6adQOkqNb9Fp6cjWFGd8B4KzBhYet1FDaJy9Zo3rtSe1VivC..; monitor_count=57'
};


var options = {
    url: 'https://s.taobao.com/search?q=YSL11&imgfile=&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=a21bo.2017.201856-taobao-item.1&ie=utf8&initiative_id=tbindexz_20170306',
    headers: headers,
    encoding: null,
    gzip:true
};

let datas = []

function writeXls(datas,index) {
    var buffer = xlsx.build([
        {
            name:'sheet1',
            data:datas   
        }
    ]);
    fs.writeFileSync('test2.xlsx',buffer,{'flag':'w'});   //生成excel
}



function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        // console.log(body);

        var $ = cheerio.load(iconv.decode(body, 'utf-8'));    
        // console.info(iconv.decode(body, 'utf-8'))
        var content = iconv.decode(body, 'utf-8')
        var price = content.match(/\"view_price\"\:\"[\d\.]*\"/gi);
        var name = content.match(/\"raw_title\"\:\".*?\"/gi);
        var nid = content.match(/\"nid\"\:\"[0-9]+\"/gi);
        var url = content.match(/\"pic_url\"\:\".*?\"/gi);

        console.log(price)


        try{
            for (let index = 0; index < price.length; index++) {
                const view_price = price[index].split(':')[1].replace(/\"/g, "");
                const view_name = name[index].split(':')[1].replace(/\"/g, "");
                const view_nid = nid[index].split(':')[1].replace(/\"/g, "");
                const pic_url = url[index].split(':')[1].replace(/\"/g, "");
                datas.push([view_name,view_price,`https://detail.tmall.com/item.htm?id=${view_nid}`])

                var options1 = {
                    url: 'http:'+pic_url,
                    headers: headers,
                    encoding: null,
                    gzip:true
                };
                request(options1, (error, response, body)=>{
                    fs.writeFile('img/name'+index+'.png',body,(err)=>{
                        if (err) console.log(err);
                    })
                });
            }
        } catch(err){
            datas.unshift([['名称'],['价格'],['路径']])
            writeXls(datas,Topindex);
        }
       
    }
}



request(options, callback);

// for (let index = 1; index < 80; index++) {
//     var options = {
//         url: 'https://s.taobao.com/search?q=YSL11&imgfile=&js=1&stats_click=search_radio_all%3A1&initiative_id=staobaoz_20190719&ie=utf8&bcoffset=1&ntoffset=1&p4ppushleft=2%2C48&s='+44*index,
//         headers: headers,
//         encoding: null,
//         gzip:true
//     };
//     Topindex = index+1
//     request(options, callback);
// }

datas.unshift([['名称'],['价格'],['路径']])
writeXls(datas,Topindex);