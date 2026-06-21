const express = require('express');
const router = express.Router();

//controller functions
const cartControllers = require('../controllers/cartController');

// get cart/:id - Fetch a cart for a specific user
router.get('/:id', cartControllers.getCartForID);

// POST cart/:id - Add a product to a specific user's cart
router.post('/:id', cartControllers.addProductToID);

module.exports = router;