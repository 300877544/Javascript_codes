var num = Number(prompt("Enter the number"));
var fact=1;
var i=1;
while(i<=num){
    fact = fact * i;
    i++;
}
console.log("Factorial of " + num + " is " + fact);
