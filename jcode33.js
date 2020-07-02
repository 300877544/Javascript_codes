


function double(ar){
    arr=[];

for(item of ar){

    dbl=item**2;
    arr.push(dbl);



}



return arr;
}


ar=[10,20,30];

result=double(ar);
console.log(result);