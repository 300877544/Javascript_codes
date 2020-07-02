var n = Number(prompt("Enter the limit of array"));
var arr = [];
var temp = 0 , flag=0;
for( var i =0; i< n ; i++)
{
    no = Number(prompt("Enter the array elements"));
  arr.push(no);
}
var element = Number(prompt("Enter  the element to be searched"));
function sort()
{
  for (let j = 0; j < arr.length; j++) {
      for (let k = j+1; k < arr.length; k++) {
          if(arr[j] > arr[k])
          {
            temp = arr[j];
            arr[j] = arr[k];
            arr[k]  = temp;
          }
          
      }
      
  }
  //for (let index = 0; index < arr.length; index++) {
      console.log( arr);
      
  //}
  
}

function binarysearch(arr, element)
{
    var flag=0;

  var lower = 0;
  var upper = arr.length;
  while(lower<=upper)
  {
      var mid;
      mid = parseInt((lower+upper)/2);
      if(element == arr[mid])
      {
          console.log(element + " found at " + mid + " location ");
          break;
      }
      else if (element > arr[mid])
      {
          lower = mid + 1;
      }
      else if(element< arr[mid]){
          upper = mid - 1;
      }
      else{
          flag = 1;
          break;
      }
  }
  if (flag == 1 ){
    console.log("Element not found");
}
}

sort();

binarysearch(arr, element);