class Bank
{
    
    constructor(accountno, name, actype, balance){
        this.accountno = accountno;
        this.name = name;
        this.actype = actype;
        this.balance = 3000;
    }
    
 
    withdrawal(amount){
        
        if(this.balance>=amount)
        {
            this.balance = this.balance - amount;
        }
        else{
            alert("Balance less, Transaction failed");
        }
       

    }
    deposit(amount)
    {    
        
        this.balance = this.balance + amount;
    }
    showbalance()
    {
      console.log("Account no " + this.accountno);
      console.log("Balance " + this.balance);
    }

}
b = new Bank("Ch23433", "Bini", "savings");

b.withdrawal(500);
b.showbalance();
