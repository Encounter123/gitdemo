/*
 * @Description: 连接数据库（封装）
 * @version: 
 * @Company: BAT
 * @Author: yikangquan
 * @Date: 2019-07-16 14:31:31
 * @LastEditors: yikangquan
 * @LastEditTime: 2019-07-16 16:51:53
 */

const db    = {};
const mysql = require('mysql');
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : '47.99.186.69',
    port            : '3306',
    user            : 'root',
    password        : 'Fyb110909',
    database        : 'fyb'
});

db.query = (sql, callback) => {
    if (!sql) {
        callback();
        return;
    }
    pool.query(sql, (err, rows, fields) => {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        };

        callback(null, rows, fields);
    });
}

module.exports = db