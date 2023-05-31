function Student(sno ,name)
{
    this.sno = sno
    this.name = name
    console.log(this)
}

Student.prototype.display = function()
{
    console.log("sno:", this.sno,"name:",this.name)
}

 //Student(12,"ssddd") //window scope or global scope
 //new Student(12,"ssddd") //separate scope for student and it will behave like class and constructor

 obj1 = new Student(11,"qw")
 obj2 = new Student(12,"ssddd")
 obj1.display()
 obj2.display()