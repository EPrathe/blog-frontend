import React, {useState, useEffect} from 'react';
import ArticlesList from '../components/ArticlesList';
import PropTypes from 'prop-types'
import {addArticles} from '../modules/actions'
import { connect } from 'react-redux';

const ArticlesListPage = (contentfulArticles) =>{ 
  if(contentfulArticles.contentfulArticles.length<1 || !contentfulArticles.contentfulArticles) return null;

    return(
        <>
        <h1 className="fade-in">Articles</h1>
        {contentfulArticles.contentfulArticles && <ArticlesList articles={contentfulArticles.contentfulArticles} />}
        </>
)};

ArticlesListPage.propTypes = {
    setContentful: PropTypes.func.isRequired
  }

  const mapStateToProps = (state) => {
    return {
      contentfulArticles: state.articles
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
      setContentful: data => dispatch(addArticles(data))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListPage);
