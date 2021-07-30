const students = require ('../dummyDB/students.js');
// Get all students

class StudentController {
      // Get all students
      static getAllStudents(req, res) {
        return res.status(200).json({
              students,
              message: "All the students",
        });
  }

}

module.exports = StudentController
