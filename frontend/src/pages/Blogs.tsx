import React from 'react';
import '../css/blogs.css';
import {useState, useEffect} from 'react'

const Blogs = () => {
  
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // Fetch blogs from the backend API
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3000/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className=" animate__animated animate__fadeIn blogs">
      <h1 className='text-center blogs-title'>Blogs</h1>
      {blogs.map(blog => (
        <div className="blog cursor-pointer "  key={blog._id}>
          <h2 className='whitespace-normal hover:underline'>{blog.title}</h2>
          <p className="blog-meta">{blog.publishedAt} | By {blog.author}</p>
          <p className="blog-content">{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
