const express = require('express');
const router = express.Router();

//controllers
const studentController = require('../controllers/studentController');

router.post('/add-student', studentController.addStudent);
router.put('/update-student/:id', studentController.updateStudent);
router.delete('/delete-student/:id', studentController.deleteStudent);

module.exports = router;
