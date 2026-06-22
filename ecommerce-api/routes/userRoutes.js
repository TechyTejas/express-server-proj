const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userController');
// get users list GET /users
router.get('/', userControllers.getAllUsers);

//post Add a new user POST /users
router.post('/', userControllers.addNewUser);

//get user/:id GET /users/:id
router.get('/:id', userControllers.getUserByID);

module.exports = router;