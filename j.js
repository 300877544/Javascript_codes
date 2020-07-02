var arr=[],even=[],odd=[];
var n=Number(prompt("Enter the length: "));
for(i=0;i<n;i++)
{
    no=Number(prompt("Enter the element"));
    arr.push(no);
}
console.log("Array elements:");
for(i of arr)
{
    console.log(i);
}
for(i of arr)
{
    if(i%2==0)
    {
        even.push(i);
    }
    else
    {
        odd.push(i);
    }
}
console.log("Even elements:");
for(i of even)
{
    console.log(i);
}
console.log("Odd elements:");
for(i of odd)
{
    console.log(i);
}