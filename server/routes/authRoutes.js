const express = require('express');
const jwt = require('jsonwebtoken'); // JWT for authentication
const router = express.Router();

// Temporary mock user storage (you would use a database in production)
let mockUser = { email: 'user@example.com', password: 'password123' };

// Route for QR Login
router.get('/qr-login', (req, res) => {
  const { token } = req.query;
  if (!token) return res.status(400).json({ message: 'Token is missing' });

  const user = mockUser; // In real-world, get the user from a database based on the token

  const userToken = jwt.sign({ email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token: userToken });
});

// Login Route (via email/password)
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === mockUser.email && password === mockUser.password) {
    const token = jwt.sign({ email: mockUser.email }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
