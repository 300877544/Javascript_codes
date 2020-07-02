class Parent{

    constructor(no){
        this.no=no;
        console.log("Inside parent constructor");
        console.log(this.no);
    }
}

class Child extends Parent{
    constructor(){
        super(10);//parent class constructor is invoked
        console.log("Inside child constructor");
    }

}

c = new Child();
