import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/articles-list">Articles</Link>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/evanprather"  rel="noopener noreferrer" target="_blank">LinkedIn</a>
            </li>
        </ul>
    </nav>
);

export default NavBar;