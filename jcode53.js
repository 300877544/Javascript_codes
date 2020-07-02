class Parent{
    m1(){
        console.log("Inside no arg method");
    }
    m1(no){
        console.log("Inside one arg method");
    }
}
p = new Parent(10);
p.m1();