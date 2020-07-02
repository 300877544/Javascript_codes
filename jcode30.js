var n = Number(prompt("Enter the limit of array"));
var sum=0,m,n1;

var arr = [];
for(var j =0; j<n;j++){
    no = Number(prompt("Enter the array"));
    arr.push(no);
}

for(i=0;i<n;i++)
{
    if(arr[i+1]!=(arr[i]+1))
    {
        console.log((arr[i]+1));
        break;
    }
}