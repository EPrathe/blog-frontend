import React from 'react';
import ToDoList from '../components/ToDoList';

const HomePage = () => (
    <>
    <h1>Welcome to Everything But Bagel!</h1>
    <p>
        I created this React based site with the help of a lynda.com tutorial. The site is hosted on Amazon Web Services
         and any persisted data (comments and upvotes) is stored
        using a Mongo database. The calls are made using the Node framework Express.
    </p>
    <div className="ToDoList-container">
    <ToDoList/>
    </div>
    </>
);

export default HomePage;