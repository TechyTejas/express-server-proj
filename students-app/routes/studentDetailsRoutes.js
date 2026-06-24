const express = require('express');
const router = express.Router();

//controllers
const studentDetailsController = require('../controllers/studentDetailsController');

//get student details list GET /student-details
router.post('/add', studentDetailsController.addStudent);
router.put('/update/:id', studentDetailsController.updateStudent);
router.delete('/delete/:id', studentDetailsController.deleteStudent);
router.get('/get/:id', studentDetailsController.getStudents);
router.get('/get', studentDetailsController.getStudents);

module.exports = router;