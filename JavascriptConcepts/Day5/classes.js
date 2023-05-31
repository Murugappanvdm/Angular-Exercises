//es2015 or later

class Student{
    sno;
    name; //not legal in es2015
    constructor(sno, name){
        this.sno = sno
        this.name = name
    }
    display()
    {
        console.log("sno:",this.sno,"name:",this.name)
    }
}
obj = new Student(11,"one")
obj1 = new Student(12,"two")

obj.display()
obj1.display()
