class Parent{
    phone(){
        console.log("Samsung");

    }
}

class Child extends Parent{
    phone(){
        console.log("Iphone");
    }

}

c = new Child();
c.phone();