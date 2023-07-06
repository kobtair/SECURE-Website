import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/blogArticle.css';

interface Article {
  title: string;
  publishedAt: string;
  author: string;
  content: string;
}

const Blog: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://secure-website.onrender.com/blogs/${id}`);
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
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-article">
      <div className="article-content mt-11">
        <h1 className="title">{article.title}</h1>
        <p className="metadata">
          Published on {article.publishedAt} by {article.author}
        </p>
        <div className="content">
          <p>{article.content}</p>
          {/* Add more content paragraphs */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
