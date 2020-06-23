import React, {FunctionComponent} from 'react';
import ToDoList from '../components/ToDoList';

const HomePage = () => (
    <div className="fade-in">
    <h1>Welcome to Everything But Bagel!</h1>
    <p>
        I created this React based site with the help of a lynda.com tutorial. The site is hosted on Amazon Web Services
         and any persisted data (to do list, comments and upvotes) is stored
        using a Mongo database. The calls are made using the Node framework Express.

        All of the content in the articles are manged using the CMS Contentful.
    </p>
    <div className="ToDoList-container">
    <ToDoList/>
    </div>
    </div>
);

export default HomePage;