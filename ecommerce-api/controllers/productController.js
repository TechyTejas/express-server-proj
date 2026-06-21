const getAllProducts = (req,res) => {
    res.send("Fetching all products")
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