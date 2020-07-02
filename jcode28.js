var n = Number(prompt("Enter the limit of the array"));
var arr = [];
var no, temp=0,item;
var cntr=1;
for(i=0;i<n;i++)
{
    no=Number(prompt("Enter the element"));
    arr.push(no);
}
console.log("Array is");
for(i in arr)
{
    console.log(" " + arr[i]);
}

for(item of arr)
{


    res=item**cntr;
    cntr+=1;
    console.log(res);
}