const express = require('express');
const router = express.Router();

// get users list GET /users
router.get('/',(req, res)=>{
    res.send("Here is the list of all users");
})

//post Add a new user POST /users
router.post('/',(req, res)=>{
    res.send("A new user has been added");
})

//get user/:id GET /users/:id
router.get('/:id',(req, res)=>{
    const id = req.params.id;
    res.send(`Fetching user with id: ${id}`);
})

module.exports = router;