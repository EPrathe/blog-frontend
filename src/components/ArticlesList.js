import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
        
        <div className="article-container"  key={key}>
        <Link className="article-list" to={`/article/${article.fields.slug}`}>
            <div className="article-item">
            <img className="list-picture" src={article.fields.featuredImage.fields.file.url} alt={article.fields.title}/>
            <h3>{article.fields.title}</h3>
            <p>{article.fields.body.substring(0, 150)}...</p>
            </div>
        </Link>
        </div>
    ))}
    </>
);

export default ArticlesList;