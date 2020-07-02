var n = Number(prompt("Enter the limit of the array"));
var arr = [];
var no, temp=0, element;
var flag = 0 ;
for(i=0;i<n;i++)
{
    no=Number(prompt("Enter the array"));
    arr.push(no);
}
var upper = arr.length;
var lower = 0;
console.log("Sorted array is");
for(i=0; i< arr.length;i++)
{
    for(j=i+1; j< arr.length;j++){
        if(arr[i] > arr[j])
        {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    console.log(" " + arr[i]);
}

element = Number(prompt("Enter the element to be searched"));
while(lower<=upper){
    
        mid = parseInt((lower + upper)/2);
        if(element == arr[mid])
        {
          console.log( element + " found at " + mid + " location ");
          break;
        }
        else if(element > arr[mid]){
            lower = mid + 1;
        }
        else if(element < arr[mid]){
            upper = mid - 1;
        }
        else{
            flag = 1;
            break;
        }
    
   
}
if(flag == 1){
    console.log("Element is not there in the list");
}

