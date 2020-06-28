import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const ArticlePage = ({ match, contentfulArticles}) => {
    const ReactMarkdown = require('react-markdown');

    const [articleContent,setArticleContent]=useState();
    const [article, setArticle]=useState();
    const [loading, setLoading]=useState(true);

    const name = match.params.name;

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] }); 

       useEffect(()=>{
        if(contentfulArticles.length>1){
        setArticleContent(contentfulArticles);
        }
       }, [contentfulArticles]);
       
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }

        if(articleContent){
            const selectedArticle = articleContent.find(article => {
                return article.fields.slug === name
            });
            setArticle(selectedArticle.fields);
           }
       
        fetchData();
        window.scrollTo(0, 0);
    }, [name]);

    useEffect(()=>{
        if(articleContent){
            const selectedArticle = articleContent.find(article => {
                return article.fields.slug === name
            });
            if(selectedArticle){
                 setArticle(selectedArticle.fields);
                 setLoading(false);
            }
            setLoading(false);
           }
    }, [articleContent]);

    if(!article && loading) return <></>
    if(!article && !loading) return <NotFoundPage />

    const otherArticles = contentfulArticles.filter(article =>{
        if(article.fields.slug !==name) return true;
        return false;
    })
    
    return (
        <div className="fade-in">
        <h1>{article.title}</h1>
        <img
            className="img-main"
            src={article.featuredImage.fields.file.url}
            alt={article.title}
          />
        <ReactMarkdown source={article.body} />
        <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        <CommentsList comments={articleInfo.comments} />
        <h2>Other Articles:</h2>
        <ArticlesList articles={otherArticles} />
        </div>
    );
}

ArticlePage.propTypes = {
    setContentful: PropTypes.func.isRequired
  }

  const mapStateToProps = (state) => {
    return {
      contentfulArticles: state.articles
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
      
  });

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);