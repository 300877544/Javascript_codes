function square(){
   var sq = document.querySelector("#num").value;
   try{
       if(num==""){
           throw "Empty";
       }
       if(isNaN(sq)) throw "Not a number";
       var  n = sq**2;
       window.alert(n);
   }
   catch(err)
   {
       alert(err);
   }

}