function Student(name) {
  this.name = name;
}
Student.prototype.hello = function () {
  console.log('Hello, I\'m a student. My name is ' + this.name + '!');
};

// use allow function
function Teacher(name) {
 this.name = name; 
}
Teacher.prototype.hello = () => {
  console.log('Hello, I\'m a teacher. My name is ' + this.name + '!');
};


var student = new Student('Jay');
var teacher = new Teacher('Push');
student.hello();
teacher.hello();
