const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/productController');

// GET /products - Fetch all products
router.get('/', productControllers.getAllProducts);

// POST /products - Add a new product
router.post('/', productControllers.addNewProduct);

// GET /products/:id - Fetch a specific product
router.get('/:id', productControllers.getProductByID);

module.exports = router;