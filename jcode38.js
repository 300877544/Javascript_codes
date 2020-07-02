n1 = Number(prompt("Enter the  number"));
function prime(n1){
    var flag =0;
    if((n1==0) | (n1==1)){
        console.log(n1 + "is not a prime");
    }
    for(var i =2; i<n1;i++){
        if(n1%i == 0){
            flag=1;
            break;
        }
    }
    if(flag == 0 ){
        console.log(n1+ " is prime");
    }
    else{
        console.log(n1+ " is not prime");
    }
}
prime(n1);