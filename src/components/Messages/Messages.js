import React from 'react';
import DialogList from "./DialogList/DialogList";
import MessagesList from "./MessagesList/MessagesList";
import css from './Messages.module.css'

const Messages = () => {
    return(
        <div className={css.dialogs}>
            <DialogList className={css.part + ' ' + css.dialogList}/>
            <MessagesList className={css.part + ' ' + css.messagesList}/>
        </div>
    );
}

export default Messages;