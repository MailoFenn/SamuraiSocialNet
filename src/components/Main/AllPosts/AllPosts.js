import React from 'react';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import css from './AllPosts.module.css';

const AllPosts = () => {
    return(
        <div className={css.posts}>
            <div className={css.heading}>My posts</div>
            <NewPost />
            <Post />
        </div>
    );
}

export default AllPosts;