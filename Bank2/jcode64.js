class Transactions{
    static withdraw(){
        var amount = document.querySelector("#amtW").value;
        var accPin = document.querySelector("#mpinW").value;
        var accNo=localStorage.getItem("myAccNo");
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

        var accno=localStorage.getItem("myAccNo");
        document.querySelector("#amtD").value="";
        document.querySelector("#mpinD").value="";

        var pin = Data.accountDetails[accno]["mpin"]; 
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