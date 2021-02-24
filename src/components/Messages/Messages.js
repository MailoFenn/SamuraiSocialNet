import React from 'react';
import DialogList from "./DialogList/DialogList";
import MessagesList from "./MessagesList/MessagesList";
import css from './Messages.module.css'

const Messages = (props) => {
    return(
        <div className={css.dialogs}>
            <DialogList data={props.dialogs} className={css.part + ' ' + css.dialogList} />
            <MessagesList data={props.messages} className={css.part + ' ' + css.messagesList} />
        </div>
    );
}

export default Messages;