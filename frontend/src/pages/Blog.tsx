import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/blogArticle.css';
import { Helmet } from 'react-helmet';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

interface Article {
  title: string;
  publishedAt: string;
  author: string;
  content: string;
  description: string;
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



const Blog: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const { id } = useParams<{ id: string }>();
 
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://cheerful-hat-deer.cyclic.app/blogs/${id}`);
        const data = await response.json();

        if (response.ok) {
          setArticle(data);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div className=' mt-60  flex items-center justify-center'> <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
    <CircularProgress color="success" />
  </Stack></div>;
  }
  <Helmet>
  <title>{article.title}</title>
  <meta name="description" content={article.description} />
</Helmet>


  return (
    <div className="blog-article">
      <div className="article-content mt-11">
        <h1 className="title">{article.title}</h1>
        <p className="metadata">
          Published on {formatTimestamp(article.publishedAt)} by {article.author}
        </p>
        <div className="content">
          <div 
        dangerouslySetInnerHTML={{ __html: article.content }} ></div>
          
          {/* Add more content paragraphs */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
