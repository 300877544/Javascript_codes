var num = Number(prompt("Enter the limit to display fibonnaci series"));
var a=0;
var b=1;
console.log(a+ " " + b);
for(var i=2; i< num; i++){
   var c;
   c=a +b;
   console.log(" " + c);
   a=b;
   b=c;

}