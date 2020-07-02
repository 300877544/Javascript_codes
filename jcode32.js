var arr = [];
var limit = Number(prompt("Enter the limit"));
for(var i =0;i < limit; i++){
    var no = Number(prompt("Enter the number"));
    arr.push(no);
}
var sum =0 ;
function arraysum(){
  for(i =0 ; i< limit ; i++){
       sum = sum +arr[i];
  }
  return sum;
}

var val = arraysum();
console.log(val);