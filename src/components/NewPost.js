import React from 'react';

const NewPost = () => {
    return(
        <div className='new-post'>
            <textarea className='comment-new-post' placeholder="What's up, Samurai?" />
            <button className='send'>Send</button>
        </div>
    );
}

export default NewPost;