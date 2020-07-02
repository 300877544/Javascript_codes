var n1 = Number(prompt("Enter the first number"));
var n2 = Number(prompt("Enter the second number"));
var n3 = Number(prompt("Enter the third number"));
var temp=0;
console.log("Numbers before swapping " +n1 + " " + n2 + " " + n3);
if((n1>n2) & (n1>n3)) {
    if(n2>n3)
     {
        console.log("Numbers after swapping " +n1 + " " + n2 + " " + n3);
     }
     else{
        console.log("Numbers after swapping " +n1 + " " + n3 + " " + n2);
     }
}
if((n2>n3) & (n2>n1)) {
    if(n1>n3)
     {
        console.log("Numbers after swapping " +n2 + " " + n1 + " " + n3);
     }
     else{
        console.log("Numbers after swapping " +n2 + " " + n3 + " " + n1);
     }
    }
    if((n3>n2) & (n3>n1)) {
        if(n2>n1)
         {
            console.log("Numbers after swapping " +n3 + " " + n2 + " " + n1);
         }
         else{
            console.log("Numbers after swapping " +n3 + " " + n1 + " " + n2);
         }
    }

