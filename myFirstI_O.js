// Variables
var fs = require('fs');
var ioArr = fs.readFileSync(process.argv[2]);
var result = ioArr.toString().split('\n').length-1;
console.log(result);
//
