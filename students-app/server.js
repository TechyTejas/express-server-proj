const express = require('express');
const port = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const studentRoutes = require('./routes/studentRoutes');
const busRoutes = require('./routes/busRoutes');
const studentDetailsRoutes = require('./routes/studentDetailsRoutes');

app.get('/', (req, res) => {
  res.send('Hello World');
});

//use routes
app.use('/students', studentRoutes);
app.use('/users', busRoutes);
app.use('/student-details', studentDetailsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});