import React from 'react';
import css from './NewPost.module.css';

const NewPost = () => {
    return(
        <div className={css.newPost}>
            <textarea className={css.commentNewPost} placeholder="What's up, Samurai?" />
            <button className={css.send}>Send</button>
        </div>
    );
}

export default NewPost;