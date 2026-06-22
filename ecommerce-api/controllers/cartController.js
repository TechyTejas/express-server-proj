const getCartForID =(req,res) => {
    const id = req.params.id;
    res.send(`Fetching cart for user with id: ${id}`);
}

const addProductToID =(req,res) => {
    const id = req.params.id;
    res.send(`Adding product to cart for user with id: ${id}`);
}

module.exports = {
    getCartForID,
    addProductToID
}