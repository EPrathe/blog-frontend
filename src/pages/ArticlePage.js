import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import NotFoundPage from './NotFoundPage';

//import articleContent from './article-content';
import * as contentful from 'contentful'

const ArticlePage = ({ match }) => {
    const ReactMarkdown = require('react-markdown');

    const [articleContent,setArticleContent]=useState();
    const [article, setArticle]=useState();
    const [loading, setLoading]=useState(true);

    const name = match.params.name;

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });


    const getContentful = async()=>{
        let client= await contentful.createClient({
            space: '4l76bla6vbnr',
            accessToken: 'iIk069YpSKyGEGpv-dY5HnnWpXZo1AbP00lp7wcg3y0'
            })
            return client;
        }  
    
    useEffect(()=>{
        async function fetchData() {
          const cat= await getContentful();
          cat.getEntries().then(({items})=>{
              setArticleContent(items);
          })
      }
      fetchData();
       },[]);

       useEffect(()=>{
           if(articleContent){
            const selectedArticle = articleContent.find(article => {
                return article.fields.slug === name
            });
            if(selectedArticle){
                 setArticle(selectedArticle.fields);
                 setLoading(false);
            }
           }
       }, [articleContent]);
       
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

    if(loading) return <div className="class-loading">Loading</div>
    if(!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article =>{
        if(article.fields.slug !==name) return true;
        return false;
    })
    
    return (
        <>
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
        </>
    );
}

export default ArticlePage;