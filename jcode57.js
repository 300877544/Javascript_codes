var c="ABCABC";
ob={};
var sum;
for(var i of c){
    if(i in ob){
        console.log(i+ "first character");
        break;

    }
    else{
        ob[i] = 1;
    }


}