import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/blogs.css';
import { Helmet } from 'react-helmet';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
interface Blog {
  _id: string;
  title: string;
  publishedAt: string;
  author: string;
  content: string;
  param_id: string;
}

function formatTimestamp(timestamp: string) {
  const dateObj = new Date(timestamp);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const seconds = String(dateObj.getSeconds()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return `${formattedDate} ${formattedTime}`;
}


const Blogs: React.FC = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://cheerful-hat-deer.cyclic.app/blogs');
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
      <Helmet>
        <title>Blogs</title>
        <meta name="description" content="Read our informative blogs on various topics related to accident detection systems, road safety, and industry insights." />
      </Helmet>
      <h1 className="text-center blogs-title">Blogs</h1>
      { blogs.length!==0?blogs.map((blog) => (
        <div
          onClick={() => navigate(`/blogs/${blog.param_id}`)}
          className="blog cursor-pointer"
          key={blog._id}
        >
          <h2 className="whitespace-normal hover:underline">{blog.title}</h2>
          <p className="blog-meta">
            {formatTimestamp(blog.publishedAt)} | By {blog.author}
          </p>
          <p className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content.substring(0,200).concat('...................') }} ></p>
        </div>
      )):<div className=' mt-36 flex justify-center'> <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="success" />
    </Stack></div> }
      
    </div>
  );
};

export default Blogs;
