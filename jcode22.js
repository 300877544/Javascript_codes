var lower = Number(prompt("Enter the lower limit"));
var upper = Number(prompt("Enter the upper limit"));
var i=0;
var flag=0;
var num =0;
var counter =0;
var prime = "";
for(var i = lower; i<= upper;i++){
    var flag=0
    
   for(var j=2; j<i;j++){
       if(i%j==0){
           flag=1;
           break;
       }
   }
   if(flag==0){
    console.log(i + " Number is prime");

}
else{
    console.log(i + " Number is not prime");
}
   
}

