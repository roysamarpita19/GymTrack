const express = require('express');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const app = express();
const port = 3001;  // Change to a new port if needed

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
