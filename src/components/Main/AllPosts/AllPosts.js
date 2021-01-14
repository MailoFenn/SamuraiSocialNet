import React from 'react';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import css from './AllPosts.module.css';

const AllPosts = () => {
    return(
        <div className={css.posts}>
            <div className={css.heading}>My posts</div>
            <NewPost />
            <Post like={`11`} postText={`Wake fucking up, Samurai.`} />
            <Post like={`56`} postText={`We have a city to burn!`}/>
            <Post like={`42`} postText={`Hello, I'm Johny!`}/>
        </div>
    );
}

export default AllPosts;