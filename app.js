const express = require('express');

const app = express();

// express.urlencoded({ extended: true }) is middleware that parses form data sent 
// from HTML forms and puts it into req.body.
// Without it, req.body will be undefined.
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('In the middleware!');
  next();
});

app.post('/welcome', (req, res, next) => {
  const name = req.body.name;
  res.send(`<h1>Hello ${name}!</h1>`);
});

app.get('/users', (req, res, next) => {
  res.send(`<div>
    <h1>Please enter your name</h1>
    <form action="/welcome" method="POST">
      <input type="text" name="name" placeholder="Enter your name">
      <button type="submit">Submit</button>
    </form>
    </div>`);
});

app.listen(3000, () => {
  console.log('Server is up and running on port 3000! Ready to handle requests.');
});