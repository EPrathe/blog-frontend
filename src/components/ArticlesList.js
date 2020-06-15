import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
    {articles.map((article, key) => (
        
        <Link className="article-list-item" key={key} to={`/article/${article.fields.slug}`}>
            <h3>{article.fields.title}</h3>
            <p>{article.fields.body.substring(0, 150)}...</p>
        </Link>
    ))}
    </>
);

export default ArticlesList;