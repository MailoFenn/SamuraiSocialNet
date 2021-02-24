import React from 'react';
import css from './MessageItem.module.css';

const MessageItem = (props) => {
    let className;
    if (props.my_message) {
        className = css.myMessageItem;
    } else {
        className = css.companionMessageItem;
    }
    return (
        <div className={className} >
            <p className={css.messageText}>{props.text}</p>
            <time>16:55</time>
        </div>
    );
}

export default MessageItem;