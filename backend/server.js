const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Signup, Login } = require('./controllers/authController');
const { authenticateToken } = require('./middleware/authMiddleware');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // To parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/auth/signup', Signup);
app.post('/api/auth/login', Login);

// Protected Route Example
app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected data', success: true, user: req.user });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
