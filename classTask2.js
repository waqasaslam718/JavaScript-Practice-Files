class Teacher{
    constructor(name, age, subject){
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    teach(){
        console.log(`${this.name} is teaching ${this.subject}`);
    }
}

class Student extends Teacher{
    constructor(name, age, subject, grade){
        super(name, age, subject);
        this.grade = grade;
    }
    study(){
        this .teach();
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }
}

let student  = new Student ("John Doe", 40, "Math","A");
student.study();