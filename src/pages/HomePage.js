import React from 'react';
import ToDoList from '../components/ToDoList';

const HomePage = () => (
    <div className="fade-in">
    <h1>Welcome to Everything But Bagel!</h1>
    <p>
        I created this mock blog in order to get practice with tool like React. This site is hosted on Amazon Web Services
         and any persisted data (to do list, comments and upvotes) is stored
        using a Mongo database. The calls are made using the Node framework Express. The pokemon card page uses GraphQL

        All of the content in the articles are manged using the CMS Contentful. Once I recieve the content from
        Contentful I save it using Redux.
        
    </p>
    <div className="ToDoList-container">
    <ToDoList/>
    </div>
    </div>
);

export default HomePage;