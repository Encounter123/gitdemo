'use strict'
var fs = require('fs')

// process.on('exit', function (code) {
//   console.log('about to exit with code: ' + code);
// });
// process.nextTick(()=>{
//   console.log('next')
// })
// console.log('now')


// fs.readFile('sample.txt','utf-8',(err,data)=>{
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// fs.readFile('sample.png',(err,data)=>{
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//     console.log(data.length + 'byts')

//     // fs.writeFile('name.png',data,(err)=>{
//     //   if (err) console.log(err);
//     // })
//     fs.stat('sample.png',(err,data)=>{
//       console.log(data)
//     })
//   }
// })


// var rs = fs.createReadStream('sample.txt','utf-8')

// rs.on('data',(chunk)=>{
//   console.log('data')
//   console.log(chunk)
  
// })

// rs.on('end',()=>{
//   console.log('end')
// })

// rs.on('error',(err)=>{
//   console.log('error'+err)
// })



// var rs = fs.createReadStream('sample.txt');
// var ws = fs.createWriteStream('copied.txt');

// rs.pipe(ws);



const schedule = require('node-schedule');

const  scheduleCronstyle = ()=>{
  //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('5 * * * * *',()=>{
        console.log('scheduleCronstyle:' + new Date());
    }); 
}

scheduleCronstyle();


