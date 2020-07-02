class Person{
    constructor(name, sal, age){
        this.name = name;
        this.sal = sal;
        this.age = age;
    }
    printValues(){
        console.log("name = " +  this.name);
        console.log("age = " +  this.age);
        console.log("sal = " +  this.sal);
    }
}
ob = new Person("Bini", 50000, 28);
ob.printValues();
ob = new Person("Anna", 500000, 28);
ob.printValues();
ob = new Person("Ann", 10000, 28);
ob.printValues();

