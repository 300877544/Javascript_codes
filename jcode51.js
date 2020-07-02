class Employee
{
    constructor(empid, name, salary)
    {
      this.empid = empid;
      this.name = name;
      this.salary = salary;

    }
    display(){
        console.log("Employee Id " + this.empid)
        console.log("Name" + this.name);
        console.log("Salary " + this.salary);
    }
    
}
function sorting(arr)
{
    for (var i = 0; i < arr.length; i++) 
    {
        for (var j = i+1; j < arr.length ; j++)
        {
       
         if(arr[j].salary>arr[i].salary)
         {
           var temp =0;
           temp = arr[j];
           arr[j] = arr[i];
           arr[i] = temp;
         }
        }
      
        
    }
    return arr;
}
    
  
 
emp = new Employee(1, " bini", 50000);
emp1 = new Employee(2, " anna", 250000);
emp2 = new Employee(3, " bobby", 5000);
emp3 = new Employee(4, " reshma", 560000);
var arr =[];
arr.push(emp);
arr.push(emp1);
arr.push(emp2);
arr.push(emp3);
arr=sorting(arr);
console.log(arr);
