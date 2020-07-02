class Student{
     personalDetails(name, age, marks, rollno) {
        this.name = name;
        this.age=age;
        this.marks = marks;
        this.rollno = rollno;
    }
    printValues(){
     console.log("Name is " + this.name);
     console.log("Age is " + this.age);
     console.log("Marks is " + this.marks);
     console.log("Roll Number is " + this.rollno);
    }
}

s = new Student();
s.personalDetails("Bini", 28, 85,20);
s.printValues();
s1 = new Student();
s1.personalDetails("Anna", 28, 40,20);
s1.printValues();
s2 = new Student();
s2.personalDetails("Bobby", 28, 90,20);
s2.printValues();
s3 = new Student();
s3.personalDetails("Bini", 28, 20,20);
s3.printValues();

var arr = [];
arr.push(s);
arr.push(s1);
arr.push(s2);
arr.push(s3);
f = arr.filter(o=>o.marks>50);
for (i of f) {
   console.log(i.name);
    
}

f1 = arr.map(o=>o.name.toUpperCase());
for (i of f1) {
    console.log(i);
     
 }
