var num = Number(prompt("Enter the number"));
var digit;
var res=0;
while(num>0){
    digit = num%10;
    res = (res*10) + digit;
    num = parseInt(num/10);
}
console.log(" " + res);