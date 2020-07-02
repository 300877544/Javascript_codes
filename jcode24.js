var n = Number(prompt("Enter the limit of the array"));
var evenarr=[];
var oddarr = [];
var arr = [];
var no, l=0;
for(i=0;i<n;i++)
{
    no=Number(prompt("Enter the element"));
    arr.push(no);
}
for(i=0;i<n;i++)
{
  console.log(" " + arr[i]);
}
for(var m = 0; m < n; m++){
    if(arr[m]%2==0){

      
        evenarr.push(arr[m]);
       
        
}
    else{
        
    
      oddarr.push(arr[m]);
    
    }  
}
    console.log("Even Array "); 
     for(j=0 ; j<evenarr.length;j++){
        console.log(" " + evenarr[j]);
    }

 console.log("Odd Array ");
    for(k=0; k< oddarr.length;k++){
        console.log(" " + oddarr[k]);
    }
   
