var n = Number(prompt("Enter the limit of the array"));
var arr = [];
var no, temp=0,item;
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
var item = Number(prompt("Enter the item to be searched"));
for(var  j =0 ; j< arr.length;j++){
    if(arr[j] == item){
        console.log(item + " is found in location " + j);
    }
    else{
        console.log(item + " not found");
    }
}