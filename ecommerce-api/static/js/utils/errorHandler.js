const handleError = (error, form) => {
    if (error.response) {
        console.error(`Server Error [${error.response.status}]: ${error.response.data?.message || error.response.statusText}`);
    } else if (error.request) {
        console.error('Network Error: No response from server. Check if the server is running.');
    } else {
        console.error('Request Error:', error.message);
    }
    if (form) form.product.value = "";
};
