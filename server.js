// Import the express module
const express = require('express');

// Create an express application
const app = express();

// Define the port
const PORT = 3000;

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

