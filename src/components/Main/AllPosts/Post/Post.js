import React from 'react';
import css from './Post.module.css';

const Post = () => {
    return(
        <div className={css.post}>
            <img src='https://avatarfiles.alphacoders.com/190/thumb-190579.jpg' className={css.avatarMin} alt='avatar'/>
            <div>
                Wake the fuck up, Samurai. We have a city to burn.
            </div>
        </div>
    );
}

export default Post;