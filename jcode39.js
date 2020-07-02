n1 = Number(prompt("Enter the  number to be reversed"));
function reverse(n1)
{ 
    var result = 0;
    var digit;
    while(n1>0)
    {
        
         digit = n1%10;;
        result = (result*10) + digit;
        n1= parseInt(n1/10);
    }
 
  console.log(" Reversed number is " + result);
}

reverse(n1);