var n1= prompt("Enter the value no1");
var n2 = prompt("Enter the value no2");
var res;
var n11=Number(n1);
var n22=Number(n2);
op = prompt("Enter operator");
switch(op)
{
    case '+':{ res = n11+n22;
              console.log("Result is " + res);
              break;
             }
    case '-':{ res = n11-n22;
                console.log("Result is " + res);
                break;
               }
    case '/' :{
        res = n11/n22;
        console.log("Result is " + res);
        break;
    }
    case '*' :{
        res = n11*n22;
        console.log("Result is " + res);
        break;
    }
    case '%' :{
        res = n11%n22;
        console.log("Result is " + res);
        break;
    }
    case '**' :{
        res = n11**n22;
        console.log("Result is " + res);
        break;
    }
    default: console.log("Invalid operator");
             break;
}