import React from 'react';
import MessageItem from "./MessageItem/MessageItem";
import css from './MessagesList.module.css';

const MessageList = (props) => {
    return(
      <div className={props.className}>
          <MessageItem my_message={true}/>
          <MessageItem my_message={false}/>
          <MessageItem my_message={true}/>
      </div>
    );
}

export default MessageList;