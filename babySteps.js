var numArr = process.argv.slice(2);
var sum = 0;
numArr.forEach(function(num){
  sum+= Number(num);
});
console.log(sum);
