const express = require('express');

const app = express();
const categoiresRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const coursesRouter = require('./routes/courses');
const studentsRouter = require('./routes/students');

// express.urlencoded({ extended: true }) is middleware that parses form data sent 
// from HTML forms and puts it into req.body.
// Without it, req.body will be undefined.

// learn middleware 
app.use(express.json());  //Parses raw JSON
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   console.log('In the middleware!');
//   next();
// });

// app.post('/welcome', (req, res) => {
//   res.send(`<h1>Hello ${req.body.name}!</h1>`);
// });

// app.get('/users', (req, res) => {
//   res.send(`<div>
//     <h1>Please enter your name</h1>
//     <form action="/welcome" method="POST">
//       <input type="text" name="name" placeholder="Enter your name">
//       <button type="submit">Submit</button>
//     </form>
//     </div>`);
// });

// // learn middleware routes
// app.get('/guests', (req, res) => {
//   res.send(`
//     <div>
//       <h1>Please enter your name</h1>
//       <form action="/guests" method="POST">
//         <input type="text" name="name" placeholder="Enter your name">
//         <input type="text" name="dish" placeholder="Enter the dish">
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   `);
// });

// app.post('/guests', (req, res) => {
//   const name = req.body.name;
//   const dish = req.body.dish;
//   res.redirect(`/orders/${name}/${dish}`);
// });

// app.get('/orders/:name/:dish', (req, res) => {
//   const name = req.params.name;
//   const dish = req.params.dish;
//   res.send(`<h1>${name} has ordered the dish ${dish}</h1>`);
// });

// app.get('/categories', (req, res) => {
//   res.send(`
//     <h1>Here is the list of all categories.</h1>
//     <form action="/categories" method="POST">
//     <input type="text" name="category" placeholder="Enter the category">
//     <button type="submit">Submit</button>
//     </form>
//     `);
// });

// app.post('/categories', (req, res) => {
//   const category = req.body.category;
//   res.send(`<h1>A new category has been created: ${category}</h1>`);
// });

// any req to this route will return 404 - Page Not Found

// GET /products - Respond with "Here is the list of all products."
// POST /products - Respond with "A new product has been added."
// GET /categories - Respond with "Here is the list of all categories."
// POST /categories - Respond with "A new category has been created."

// Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Express Server!</h1>');
});

app.use('/categories', categoiresRouter);
app.use('/products', productsRouter);
app.use('/courses', coursesRouter);
app.use('/students', studentsRouter);

app.use('/{*path}', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(3000, () => {
  console.log('Server is up and running on port 3000! Ready to handle requests.');
});