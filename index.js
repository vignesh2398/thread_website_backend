// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const loginRoutes = require('./routes/loginRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', apiRoutes,loginRoutes);
// app.use('/login', loginRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('Welcome to the Express API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
