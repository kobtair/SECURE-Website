const express = require('express');
const router = express.Router();
const validator = require('validator');
const Email = require('../models/Email');

// POST /emails - Validate and store email
router.post('/emails', async (req, res) => {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.json({ message: 'Email saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
