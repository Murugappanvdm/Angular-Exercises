class Student {
    sno = -1;
    name = "Noname";
    constructor(sno, name) {
        this.sno = sno;
        this.name = name;
    }
    display() {
        console.log("sno:", this.sno, "name:", this.name);
    }
}
var obj = new Student(1, "Roger");
obj.display();
