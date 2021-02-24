import React from 'react';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import css from './AllPosts.module.css';

// let postsData = [
//     {id: '0', like: '11', postText: "Wake fucking up, Samurai."},
//     {id: '2', like: '56', postText: "We have a city to burn!"},
//     {id: '3', like: '42', postText: "Hello, I'm Johny!"}
// ]

// let postsItems = postsData.map(post => <Post like={post.like} postText={post.postText} />)

const AllPosts = (props) => {
    let posts = props.data.map(post => <Post like={post.like} postText={post.postText}/>)

    return (
        <div className={css.posts}>
            <div className={css.heading}>My posts</div>
            <NewPost/>
            {posts}
        </div>
    );
}

export default AllPosts;