//Create a Student Object
export class Student {
    constructor(name, id, grades) {
        this.name = name;
        this.id = id;
        this.grades = grades;
    }

    //Add Grades
    addGrade(grade) {
        this.grades.push(grade)
    }

    //Update Student Name
    updateStudentName(studentObject, newName) {
        studentObject.name = newName;
    }
}
