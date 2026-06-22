const submitHandler = (e) => {
    e.preventDefault();
    const product = e.target.product.value;

    if (!product.trim()) {
        console.warn('Validation Error: Product name cannot be empty.');
        return;
    }

    axios.post('http://localhost:4000/products', { product })
    .then(response => {
        console.log("Product Added Successfully: " + response.data.value);
        e.target.product.value = "";
    })
    .catch(error => handleError(error, e.target));
}