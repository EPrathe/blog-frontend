import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.scss';
import { getAllCopy, getCopyForComponent } from "./copyHandling";
import { connect } from 'react-redux';
import {addArticles} from './modules/actions'
import PropTypes from 'prop-types'

class App extends Component {
  state = {
    copy: null
  };

  componentDidMount() {
    getAllCopy().then(copy => {
      this.setState({copy});
      this.props.setContentful(copy)
    });
  }


  render() {
    const { copy } = this.state;
    if (!copy) return null;

    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  setContentful: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    content: state.articles[0]
  };
};

const mapDispatchToProps = dispatch => ({
    setContentful: data => dispatch(addArticles(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
