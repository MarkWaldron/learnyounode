var fs = require('fs');
var ioArr = process.argv[2];

fs.readFile(ioArr, function(error, data){
  var result = data.toString().split('\n').length-1;
  console.log(result);
});
