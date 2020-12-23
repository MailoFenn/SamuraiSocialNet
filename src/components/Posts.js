import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";

const Posts = () => {
    return(
        <div className='posts'>
            <div className='heading'>My posts</div>
            <NewPost />
            <Post />
        </div>
    );
}

export default Posts;