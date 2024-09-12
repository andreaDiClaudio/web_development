import { Student } from "./Student.js";

//Create a student object.
const student1 = new Student("Andrea", "1234", []);
console.log("OG OBJECT", student1);

//Add a few grades to the student.
student1.grades.push(2, 12, 10);

//Update the student's name and print the updated objec
student1.updateStudentName(student1, "New Name");
console.log("UPDATED OBJECT", student1);

