import React from 'react';
import css from './Post.module.css';
import like from './like.png'

let avatar = 'https://avatarfiles.alphacoders.com/190/thumb-190579.jpg'

const Post = (props) => {
    return (
        <div className={css.post}>
            <img src={avatar} className={css.avatarMin} alt='avatar'/>
            <div>
                <div>{props.postText}</div>
                <div className={css.like}>{props.like} <img src={like} className={css.likeImage} alt='like'/></div>
            </div>
        </div>
    );
}

export default Post;