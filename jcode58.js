var arr="hello hi";
var count =0;
var ob={};
var ar = arr.split(" ");
for(var i of ar){
    if(i in ob){
        console.log(i+ "first character");
        break;

    }
    else{
        ob[i] = 1;
        console.log(i + " "+ ob[i]);
    }


}
