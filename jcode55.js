class Parent{
    constructor(){
        console.log("Inside parent constructor");
    }
}

class Child extends Parent{
    constructor(){
        super();//parent class constructor is invoked
        console.log("Inside child constructor");
    }

}

c = new Child();
