const express = require('express');
const port = 4000;
const app = express();

const connection = require('./static/js/utils/db-connection');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const studentRoutes = require('./routes/studentRoutes');

app.get('/', (req, res) => {
  res.send('Hello World');
});

//use routes
app.use('/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});