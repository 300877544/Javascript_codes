n1 = Number(prompt("Enter the  number"));
function factorial(n1){
    var fact = 1;
    for (var index = 1; index <= n1; index++) {
        fact = fact * index;
        
    }
    console.log("Factorial is " + fact);
}

factorial(n1);