var n = Number(prompt("Enter the limit of the array"));
var arr = [];
var no, temp=0;
for(i=0;i<n;i++)
{
    no=Number(prompt("Enter the element"));
    arr.push(no);
}
console.log("Array before sorting");
for(i in arr)
{
    console.log(" " + arr[i]);
}
for(m = 0; m<arr.length ; m++)
{
   for(p=m+1; p< arr.length;p++)
   {                              
     if(arr[m]>arr[p]){
       temp = arr[m];
       arr[m] = arr[p];
       arr[p] = temp;
     }
   }
}
console.log("Array after sorting");
for(i of arr){
    console.log(" " + i);
}