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
const departmentRoutes = require('./routes/departmentRoutes');

//models
const StudentDetails = require('./models/student-details');
require('./models');

app.get('/', (req, res) => {
  res.send('Hello World');
});

//use routes
app.use('/students', studentRoutes);
app.use('/users', busRoutes);
app.use('/student-details', studentDetailsRoutes);
app.use('/department', departmentRoutes);

// sequelize.sync() synchronizes Sequelize models with the database. It creates tables if they don't exist.
// force: false means "create missing tables but never drop existing ones."
db.sync({force: false}).then(()=>{
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err)=>{
  console.log(err);
});