require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
const taskRoute = require('./src/routes/tasks');
app.use('/', taskRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});