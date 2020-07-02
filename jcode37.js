n1 = Number(prompt("Enter the first number"));
n2 = Number(prompt("Enter the second number"));
n3 = Number(prompt("Enter the three number"));
function largest(n1,n2,n3){
 if((n1>n2) & (n1>n3)){
     console.log(n1 + " is the largest");
 }
 else if((n2>n1) & (n2>n3)){
    console.log(n2 + " is the largest");
}
else if((n3>n2) & (n3>n2)){
    console.log(n3 + " is the largest");
}
}
largest(n1,n2,n3);