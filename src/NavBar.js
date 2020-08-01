import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

import 'font-awesome/css/font-awesome.min.css';
const NavBar = () => {

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
    
        return () => {
          mediaQuery.removeListener(handleMediaQueryChange);
        };
      }, []);

      const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
          setIsSmallScreen(true);
        } else {
          setIsSmallScreen(false);
        }
      };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
      };
    
    return (
    <header className="Header">
     <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
    <nav className="Nav">
        <Link onClick={()=>setNavVisibility(false)} to="/">Home</Link>
        <Link onClick={()=>setNavVisibility(false)} to="/about">About</Link>
        <Link onClick={()=>setNavVisibility(false)} to="/articles-list">Articles</Link>
        <Link onClick={()=>setNavVisibility(false)} to="/pokemon">Pokemon</Link>
        <a href="https://www.linkedin.com/in/evanprather"  rel="noopener noreferrer" target="_blank">LinkedIn</a>
        <a href="https://github.com/EPrathe"  rel="noopener noreferrer" target="_blank">GitHub</a>
    </nav>
    </CSSTransition>
    <button onClick={()=>toggleNav()} className="Burger">
    <i className="fa fa-bars"></i>
    </button>
    </header>
)};

export default NavBar;