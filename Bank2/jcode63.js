class Data{
     static accountDetails ={
      sbin1001:{name: "Bini", mpin: 2014, balance: 15000},
      sbin1002:{name:"Bobby", mpin:2015,balance:200000},
      sbin1003:{name:"Reshma" , mpin: 2016, balance: 300000},
      sbin1004:{name:"Anna", mpin:2017, balance:400000},
      sbin1005:{name:"Mia", mpin:2018, balance: 50000},
   
   
     };
}
class User{
    static login(){
        var accno= document.querySelector("#accno").value;
        var mpin = document.querySelector("#mpin").value;
        localStorage.setItem("myaccNo", accno);
        if(accno in Data.accountDetails)
        {
            var pin = Data.accountDetails[accno]["mpin"];
            if(mpin == pin)
            {
                swal("Success Login", "success")
                .then((value)=>{
                    window.location.href="file:///C:/Users/BINI%20BABU/Desktop/Bini_HTML/Javascript/Bank2/Trans.html";

                });
             

            }
            else{
                swal("Login Failed!!!", "Invalid Mpin");
            } 
        }
        else{
            swal("Login Failed!!!", "Inavlid Username ");
        
        }
    }
}
class Transactions{
    static withdraw(){
        var amount = document.querySelector("#amtW").value;
        var accPin = document.querySelector("#mpinW").value;
    
        var accNo=localStorage.getItem("myaccNo");
        document.querySelector("#amtW").value="";
        document.querySelector("#mpinW").value="";

        var pin = Data.accountDetails[accNo]["mpin"]; 
        if(accPin == pin) 
            {
                var accName = Data.accountDetails[accNo]["name"];
                var accBalance = Data.accountDetails[accNo]["balance"];
                accBalance = accBalance - amount;
                Data.accountDetails[accNo]["balance"]=accBalance;
                swal("Hi " + accName + ",  Balance is " + String(Data.accountDetails[accNo]["balance"]), "Amount Debited: " + amount);
            }
            else{
                swal("Login Failed!!!", "Invalid Mpin");
            } 
    }

    static deposit(){
        var amount = document.querySelector("#amtD").value;
        var accPin = document.querySelector("#mpinD").value;
       var accno=localStorage.getItem("myaccNo");
        document.querySelector("#amtD").value="";
        document.querySelector("#mpinD").value="";

        var pin = Data.accountDetails[accno]["mpin"]; 
        console.log(pin);
        if(accPin == pin) 
            {
                var accName = Data.accountDetails[accno]["name"];
                var accBalance = Data.accountDetails[accno]["balance"];
                accBalance = Number(accBalance) + Number(amount);
                Data.accountDetails[accno]["balance"]=accBalance;
                swal("Hi " + accName + ",  Balance is " + String(Data.accountDetails[accno]["balance"]), "Amount Credited: " + amount);
                
            }
            else{
                swal("Login Failed!!!", "Invalid Mpin");
            }  
    }
    static balanceEn(){
        
        var accPin = document.querySelector("#mpin").value;

        var accno=localStorage.getItem("myAccNo");
        document.querySelector("#mpin").value="";

        var pin = Data.accountDetails[accno]["mpin"]; 
        if(accPin == pin) 
            {
                var accName = Data.accountDetails[accno]["name"];
                var accBalance = Data.accountDetails[accno]["balance"];
                
                swal("Hi " + accName ,  "Balance is " + String(Data.accountDetails[accno]["balance"]));  
            }
            else{
                swal("Login Failed!!!", "Invalid Mpin");
            }   
    }  
}


function user(){
    var accNo=localStorage.getItem("myAccNo");

    var accName = Data.accountDetails[accNo]["name"];
    document.getElementById("AccName").textContent=`Welcome ${accName} !!!`;

}
function remove(){
    localStorage.removeItem("myAccNo");
    if (document.querySelector("#amt")){
        document.querySelector("#amt").value="";
        document.querySelector("#mpin").value="";
    }
    if(accno = document.querySelector("#accno")){
        document.querySelector("#accno").value="";
        document.querySelector("#acmpin").value="";
    }
}
