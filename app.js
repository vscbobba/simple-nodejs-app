// app.js
const express = require('express');
const app = express();
const port = 8080;  // You can change the port if needed

// Middleware to log the request
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Proceed to the next middleware
});

// Simple route that returns a greeting message
app.get('/', (req, res) => {
  res.send('Hello from your monolithic Node.js application!');
});

// Example API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Here is some sample data.',
    status: 'success',
    timestamp: new Date(),
  });
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
