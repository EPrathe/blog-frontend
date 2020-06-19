import React, {useState, useEffect} from 'react';
import ArticlesList from '../components/ArticlesList';
import * as contentful from 'contentful'

const ArticlesListPage = () =>{ 
    const [articleContent,setArticleContent]=useState();
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

    return(
        <>
        <h1 className="fade-in">Articles</h1>
        {articleContent && <ArticlesList articles={articleContent} />}
        </>
)};

export default ArticlesListPage;