const express = require('express');
const router = express.Router();

//controllers
const studentController = require('../controllers/studentController');

router.post('/', studentController.addStudent);

module.exports = router;
