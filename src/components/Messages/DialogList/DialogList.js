import React from 'react';
import DialogItem from "./DialogItem/DialogItem";


const DialogList = (props) => {
        return (
            <div className={props.className}>
                    <DialogItem id='1'/>
                    <DialogItem id='2'/>
                    <DialogItem id='3'/>
        </div>
    );
}

export default DialogList;