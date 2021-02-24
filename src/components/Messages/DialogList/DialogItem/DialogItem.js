import React from 'react';
import css from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <NavLink to={`/messages/` + props.id} className={css.dialogItem}>
            <img className={css.avatarMin} src='https://avatarfiles.alphacoders.com/190/thumb-190579.jpg' alt='avatar'/>
            <div>
                <p className={css.userName}>{props.name}</p>
                <p className={css.lastMessage}>Last message</p>
            </div>
        </NavLink>
    );
}

export default DialogItem;