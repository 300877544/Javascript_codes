class Person{
   
     setValues(name, age){
      this.name= name;
      this.age = age;
    }
     printValues(){
       console.log(this.name);
       console.log(this.age);
      }
}

ob = new Person();
ob.setValues("Bini", 28);
ob.printValues();