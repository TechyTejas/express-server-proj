const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pass@2026',
    database: 'testdb'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

//import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));

//use routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Ecommerce API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
module.exports = app;