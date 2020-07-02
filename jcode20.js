var num = Number(prompt("Enter the limit"));
var sum=0;
var i=1;
while(i<=num){
    sum =sum+i*i*i;
    i++;
}
console.log("Sum is: " + sum);