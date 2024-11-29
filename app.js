// app.js
const express = require('express');
const app = express();
const port = 8080; // Set port to 8080

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

// Start the server and listen on all network interfaces (0.0.0.0)
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});