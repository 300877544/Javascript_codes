n1 = Number(prompt("Enter the  limit"));
function fibonacci(n1){
    var a=0, b=1,c;
    console.log(a + " " + b);
    for (var index = 2; index < n1; index++){
       c= a+b;
       a=b;
       b=c;
       console.log(" " + c);
      
 }
}
fibonacci(n1);