const express = require('express');
const port = 4000;
const app = express();
const db = require('./static/js/utils/db-connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const studentRoutes = require('./routes/studentRoutes');
const busRoutes = require('./routes/busRoutes');
const studentDetailsRoutes = require('./routes/studentDetailsRoutes');

//models
const StudentDetails = require('./models/student-details');

app.get('/', (req, res) => {
  res.send('Hello World');
});

//use routes
app.use('/students', studentRoutes);
app.use('/users', busRoutes);
app.use('/student-details', studentDetailsRoutes);

db.sync({force: false}).then(()=>{
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err)=>{
  console.log(err);
});