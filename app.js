// app.js - Main application file.

const express = require('express');
const app = express();
const catalogRouter = require('./routes/catalog'); // Import routes for catalog

// Register catalog routes.
app.use('/catalog', catalogRouter);

// Add other middleware and configurations as needed.

// Example: Basic error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
