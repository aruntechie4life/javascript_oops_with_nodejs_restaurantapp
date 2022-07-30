
const path = require('path');

const Person = require(path.join(__dirname, 'user_proto/Person'));
const Student = require(path.join(__dirname, 'user_proto/Student'));
var person1 = new Person('arun', 37, 'male');
//console.log("person1 " + person1.personInfo());
var stu = new Student('Syam', 26, 'male', 3.8);
console.log("stu " + stu.getStudentInfo());
console.log("stu person " + person1.personInfo());
