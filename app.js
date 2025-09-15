require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const { startBirthdayCheck } = require('./services/cronService');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error('MongoDB connection error:', err));

// --- Routes ---
app.use('/', userRoutes);

// --- Start Server and Cron Job ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    // Initialize the scheduled task
    startBirthdayCheck();
});