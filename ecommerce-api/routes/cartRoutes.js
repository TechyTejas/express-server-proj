const express = require('express');
const router = express.Router();

// get cart/:id - Fetch a cart for a specific user
router.get('./:id',(req,res) => {
    const id = req.params.id;
    res.send(`Fetching cart for user with id: ${id}`);
})

// POST cart/:id - Add a product to a specific user's cart
router.post('./:id',(req,res) => {
    const id = req.params.id;
    res.send(`Adding product to cart for user with id: ${id}`);
})

module.exports = router;