const express = require('express');
const router = express.Router();

const students = [
    {id: 1, name: 'King Tejas', age: 25},
    {id: 2, name: 'Akshada Kothule', age: 22},
    {id: 3, name: 'Prashant Shinde', age: 24},
];
// get studets list
router.get('/',(req, res)=>{
  const student = students.map(student => student.name).join(', ');   
  res.send(`Here is the list of all students: ${student}`);
})

// get student/:id
router.get('/:id',(req, res)=>{
  const id = req.params.id;
  const student = students.find(student => student.id === parseInt(id));
  if(!student){
    return res.status(404).send('Student not found');
  }
  res.send(`Student: ${student.name} is ${student.age} years old`);
})

module.exports = router;