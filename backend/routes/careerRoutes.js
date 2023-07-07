const express = require('express');
const router = express.Router();
const Career = require('../models/Careers');

// GET /careers - Get all careers
router.get('/careers', async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET /careers/:id - Get a specific career
router.get('/careers/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const career = await Career.findById(id);
    if (!career) {
      return res.status(404).json({ message: 'Career not found' });
    }
    res.json(career);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


module.exports = router;
