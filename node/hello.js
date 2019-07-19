// const bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);

// console.log(bin[0])
// console.log(bin.toString('uft-8'))

'use strict'

var name = "world"

function greet(name) {
  console.log(`helloadasds ${name}!`)
}

function greet1(name) {
  console.log(`hello1 ${name}!`)
}

module.exports = {greet:greet,greet1:greet1}