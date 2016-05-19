var student = require("./student");
var teacher = require("./teacher");

// nodejs 无全局命名空间 require
// teacher.add("sara");
// student.add("sara");

function add(teacher, students) {
  students.forEach(function(item, index) {
    teacher.add(teacher);
    student.add(item);
  });
}


exports.add = add; //推荐  传统的实例
// module.exports = add; //支持存在的 特别的对象类型
