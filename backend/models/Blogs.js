const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedAt:{
    type: Date,
    required:true,
    default: ()=> new Date(Date.now()).toString(),
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
