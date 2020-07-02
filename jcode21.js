var num = Number(prompt("Enter the number"));
var i;
var flag=0;

if((num==0) || (num==1))
{
    console.log("Number not prime");
}
for(i = 2; i<num ; i++){
 if(num %i == 0){
    
     flag=1;
     break;
 }
 else{
   
    flag=0;
 }
}
if(flag==0){
    console.log(num + " Number is prime");

}
else{
    console.log(num + " Number is not prime");
}