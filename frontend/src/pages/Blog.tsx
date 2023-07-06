import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../css/blogArticle.css';

const Blog = () => {
    const [article, setArticle] = useState(null);
    const articleId = useParams(); // Example article ID
    console.log(articleId.id)

    useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blogs/${articleId.id}`);
        const data = await response.json();

        if (response.ok) {
          setArticle(data);
          console.log(article);
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
    
    fetchArticle();
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-article">
      <div className="article-content mt-11">
        <h1 className="title">{article.title}</h1>
        <p className="metadata">Published on {article.publishedAt} by {article.author}</p>
        <div className="content">
          <p>{article.content}</p>
          {/* Add more content paragraphs */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
