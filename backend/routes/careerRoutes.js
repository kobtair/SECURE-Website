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

// POST /careers - Create a new career
router.post('/careers', async (req, res) => {
  const { title, description, requirements } = req.body;

  try {
    const newCareer = new Career({ title, description });
    await newCareer.save();
    res.status(201).json({ message: 'Career created successfully', career: newCareer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PUT /careers/:id - Update a specific career
router.put('/careers/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const career = await Career.findByIdAndUpdate(id, { title, description }, { new: true });
    if (!career) {
      return res.status(404).json({ message: 'Career not found' });
    }
    res.json({ message: 'Career updated successfully', career });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE /careers/:id - Delete a specific career
router.delete('/careers/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const career = await Career.findByIdAndDelete(id);
    if (!career) {
      return res.status(404).json({ message: 'Career not found' });
    }
    res.json({ message: 'Career deleted successfully', career });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
