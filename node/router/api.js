const express = require('express');
const app = express();
const router  = express.Router();
const bodyParser = require('body-parser');

//连接数据库
const db = require('../db/mysql')

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};
app.use(allowCrossDomain);   //http请求头
app.use(bodyParser.urlencoded({ extended: true }));  //解析post的参数
app.use(bodyParser.json());


router.get('/api/get',function (req,res) {
  res.send('enheg')
})

router.post("/api/log",function(req,res){
  // console.log(db.insertSQL('*','fxb_estate_customer_info'))
  db.selectSQL('*','fxb_estate_customer_info').then((resData)=>{
    console.log(resData)
    res.send(resData)
  })
  // console.log(abc)
  // // console.log(req.body)
  // res.send(JSON.parse(JSON.stringify(abc)))
});

const redisDb = require('../redis')


router.post("/api/setRedis",function(req,res){
  redisDb.set('0', 'key', 'value', new Date().getTime(), function (err, result) {
    if (err) {
      console.error('redis设置失败:' + err);   
      console.log('redis设置失败')                      
    } else {
      console.info( result);
      console.log('设置成功')
    }
  });
});


router.post("/api/getRedis",function(req,res){
  redisDb.get('0', "key", function (err, result) {
    if(err){
      console.error(err)
    }else{	
      console.info(result)
    }
  })
});




module.exports = router