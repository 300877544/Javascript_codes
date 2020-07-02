class Bank{
    static account(){
        var acc={
            sbin1:{name:"Bini", mpin:2011,balance:20000},
            sbin2:{name:"Bobby", mpin:2012,balance:150000},
            sbin3:{name:"Reshma", mpin:2013,balance:30000},
            sbin3:{name:"Babu", mpin:2014,balance:25000},
        }
        var accno = document.querySelector("#accno").value;
        
        var mpin = document.querySelector("#mpin").value;
        console.log(mpin);
        if(accno in acc)
        {
            var accpin = acc[accno]["mpin"];
            if(accpin==mpin)
            {
                var accname=acc[accno]["name"];
                var bal = acc[accno]["balance"];
                alert("Balance " + bal);
            }
            else{
                alert("unsuccessful");
            }
        }
        else{
            alert("Invalid account")
        }

    }
}