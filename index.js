// Import express module
const express = require('express');

// Initialize an express application
const app = express();

// Define a route for the root URL that sends "Hello, World!" as a response
app.get('/product', (req, res) => {
  res.send('Hello, World!');
});

// Set the application to listen on a specific port (e.g., 3000)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
