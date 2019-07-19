/*
 * @Description: 连接数据库（封装）
 * @version: 
 * @Company: BAT
 * @Author: yikangquan
 * @Date: 2019-07-16 14:31:31
 * @LastEditors: yikangquan
 * @LastEditTime: 2019-07-17 11:49:41
 */

// const Q = require('q')
const connection = require('./connection')


// const insertSQL = 'insert into testdemo(Id,name,pass,alexa,country) values(0,"菜鸟工具", "https://c.runoob.com","23453", "CN")';
// const selectSQL = 'select * from testdemo';
// const deleteSQL = 'delete from testdemo where Id="110"';
// const updateSQL = 'update testdemo SET name="修改" where Id="101"';

  /**
   * insertSQL查询数据库
   * @param selectName(字段数据：必填)
   * @param fromName(表名称：必填)
   * @param limit(返回条数)
   * @return: 
   */
const selectSQL = (selectName,fromName,limit) => {
  // var deferred = Q.defer();

  // deferred.resolve({result: 0})
  // return deferred.promise

  return new Promise(function(resolve,reject){
     connection.query(`select ${selectName} from ${fromName} limit ${limit||10}`, (err, res) => {
       
        // if (err) console.log(err);
        // console.log(res)
        // if(res[0]) {
        //   console.log(1)
        //   deferred.resolve(res)
        // }else {
        //   console.log(2)
        //   deferred.resolve({result: 0}) 
        // }


        // deferred.resolve({result: 0})
        // return deferred.promise
        resolve(res)
        // resolve({rulet:1})
    })
  })
}

/**
 * 新增
 * @param fromName(表名（字段）)：vue(Id,name,pass,alexa,country)
 * @param values(表名（字段）)：0,"菜鸟工具", "https://c.runoob.com","23453", "CN"
 * @return: 
 */
const insertSQL = (fromName,values) => {
  return new Promise(function(resolve,reject){
    connection.query(`insert into ${fromName} values(${values})`, (err, res) => {
      resolve(res)
    })
  })
}


// var connection = require('./route/server');

module.exports = {
  selectSQL: selectSQL,
  insertSQL: insertSQL,
};