const path = require('path');

const getAllProducts = (req,res) => {
    res.sendFile(path.join(__dirname, '../view/product.html'));
}

const addNewProduct = (req,res) => {
    res.send("Adding a new product")
}

const getProductByID = (req,res) => {
    const id = req.params.id;
    res.send(`Fetching product with id: ${id}`)
}

module.exports = {
    getAllProducts,
    addNewProduct,
    getProductByID
}