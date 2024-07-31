const express = require('express');
// const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
require('dotenv').config();

// Register
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const user = new User({ username, email, password });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Registration error:', error); // Log the error for debugging
      res.status(400).json({ error: error.message });
    }
  });
  
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ error: 'Invalid email or password' });
  
      // Directly compare the password
      if (user.password !== password) return res.status(401).json({ error: 'Invalid email or password' });
  
      // If passwords match, proceed with login
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  

module.exports = router;
