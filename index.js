// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const loginRoutes = require('./routes/loginRoutes');
const dotenv= require("dotenv");

const app = express();
dotenv.config();
console.log(process.env.CLIENT_ID)
const PORT = process.env.PORT || 4200;

// Middleware
app.use(bodyParser.json());
app.use(cors());
function errorHandling(err, req, res, next) {
// Log the error message

  // Respond to the client
  res.status(err.status).json({
    success: false,
    message: err.message,
    error: err, // Optionally include the error message in the response
  });
}
// Routes
app.use('/api', apiRoutes,loginRoutes);
app.use(errorHandling)
// app.use('/login', loginRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('Welcome to the Express API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
