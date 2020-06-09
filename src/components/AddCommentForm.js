import React, { useState, useEffect } from 'react';



const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');
    const [disabled, setDisabled]= useState(true);

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
        setDisabled(true);
    }

    useEffect(()=>{
         if(username.length>0 && commentText.length>0) setDisabled(false);
            else setDisabled(true);
    }, [commentText, username]);

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name *
                <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
                Comment *
                <textarea rows="4" id="comment" maxLength="200" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            </label>
            <button class="standard-button" disabled={disabled} onClick={() => addComment()}>Add Comment</button>
        </div>
    );
}

export default AddCommentForm;