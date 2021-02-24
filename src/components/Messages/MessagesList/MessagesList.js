import React from 'react';
import MessageItem from "./MessageItem/MessageItem";
import css from './MessagesList.module.css';

const MessageList = (props) => {

    let messageItems = props.data.map(message => <MessageItem my_message={message.my_message} text={message.text}/>);

    return(
      <div className={props.className}>
          {messageItems}
      </div>
    );
}

export default MessageList;