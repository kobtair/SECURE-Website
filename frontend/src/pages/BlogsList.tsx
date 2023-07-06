import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/blogs.css';

interface Blog {
  _id: string;
  title: string;
  publishedAt: string;
  author: string;
  content: string;
}

const Blogs: React.FC = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://secure-website.onrender.com/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn blogs">
      <h1 className="text-center blogs-title">Blogs</h1>
      {blogs.map((blog) => (
        <div
          onClick={() => navigate(`/blogs/${blog._id}`)}
          className="blog cursor-pointer"
          key={blog._id}
        >
          <h2 className="whitespace-normal hover:underline">{blog.title}</h2>
          <p className="blog-meta">
            {blog.publishedAt} | By {blog.author}
          </p>
          <p className="blog-content">{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
