import React from 'react';

const Posts = () => {
    return(
        <div className='posts'>
            <div className='heading'>My posts</div>
            <div className='new-post'>
                <textarea className='comment-new-post' placeholder="What's up, Samurai?" />
            </div>
            <div>Post 1</div>
            <div>Post 2</div>
        </div>
    );
}

export default Posts;