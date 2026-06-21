const express = require('express');
const router = express.Router();

const courses = [
  {id: 1, name: 'Frontend', description: 'Reaactjs, Angular, Vue.js'},
  {id: 2, name: 'Full Stack', description: 'Rect, Java , Node, Express, MongoDB, CICD, Kafka, Docker, Kubernetes'},
  {id: 3, name: 'Backend', description: 'Java , Node, Express, MongoDB'},
];

// get courses list
router.get('/',(req, res)=>{
  const course = courses.map(course => course.name).join(', ');
  res.send(`Here is the list of all courses: ${course}`);
})

// GET courses/:id
router.get('/:id',(req, res)=>{
  const id = req.params.id;
  const course = courses.find(course => course.id === parseInt(id));
  if(!course){
    return res.status(404).send('Course not found');
  }
  res.send(`Course: ${course.name} is ${course.description}`);
})

module.exports = router;