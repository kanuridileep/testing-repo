// Import Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Example API endpoint
app.post('/api/data', (req, res) => {
  const userData = req.body;
  res.json({
    message: 'Data received successfully',
    data: userData
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
