class Parent{
    phone(){
        console.log("Samsung phone");
    }
}

class Child extends Parent{
    m1(){
        console.log("Inside child");
    }
}

c = new Child();
c.m1();
c.phone();