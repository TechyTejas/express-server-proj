const submitHandler = (e) => {
    e.preventDefault();
    const product = e.target.product.value;

    const obj = {
        product: product  
    }

    axios.post('http://localhost:4000/products', obj)
    .then(response => {
        console.log("Product Added Successfully: " + response.data.value);
        e.target.product.value = "";
    })
    .catch(error => {
        console.error('Error:', error);
        e.target.product.value = "";
    });
}