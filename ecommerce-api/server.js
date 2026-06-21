const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const port = 4000;

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