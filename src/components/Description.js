import React from 'react';
import css from './Description.module.css';

const Description = () => {
    return(
        <div className={css.description}>
            <div className={css.avatar}>
                <img src='https://avatarfiles.alphacoders.com/190/thumb-190579.jpg' alt='avatar'/>
            </div>
            <div className={css.info}>
                <div className={css.name}>Johny Silverhand</div>
                <div>Date of birth: 2 Jan</div>
                <div>City: Night City</div>
            </div>
        </div>
    );
}

export default Description;