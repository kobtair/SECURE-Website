const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogs');

// GET /blogs - Get all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET /blogs/:param_id - Get a specific blog by param_id
router.get('/blogs/:param_id', async (req, res) => {
  const { param_id } = req.params;

  try {
    const blog = await Blog.findOne({ param_id }); // Use findOne to search by param_id
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
