var redisDb = {};
// var log4js = require('log4js');
// log4js.configure('../config/log4j.json');
// var logger = log4js.getLogger('redis');
var redis = require("redis");
var client = redis.createClient({host:'47.99.186.69', port: "6379",password:'Fyb110909',no_ready_check:true});


client.on('error',function (err) {
    console.error('redis error：'+err);
});

client.on('connect',function () {
  console.info('redis连接成功...')
});

/**
 *
 * @param dbNum 库号
 * @param key 键
 * @param value 值
 * @param expire 过期时间（单位：秒，可为空，为空则不过期）
 * @param callback 回调
 */
redisDb.set = function (dbNum,key,value,expire,callback) {
    client.select(dbNum,function (err) {
        if (err){
          console.error('redis set 选库失败：'+err);
        }else {
            client.set(key,value,function (err,result) {
                if (err){
                  console.error('redis插入失败：'+err);
                    callback(err,null);
                    return
                }
                if (!isNaN(expire) && expire>0){
                    client.expire(key, parseInt(expire));
                }
                callback(null,result);
            })
        }

    })
};

redisDb.get = function (dbNum,key,callback) {
    client.select(dbNum,function (err) {
        if (err){
          console.error('redis get 选库失败：'+err);
        }else {
            client.get(key,function (err,result) {
                if (err){
                  console.error('redis获取失败：'+err);
                    callback(err,null);
                    return
                }
                callback(null,result);
            })
        }
    })
};

module.exports = redisDb;
