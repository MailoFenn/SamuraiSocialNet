import React from 'react';
import DialogItem from "./DialogItem/DialogItem";

const DialogList = (props) => {
    let dialogItems = props.data.map(item => <DialogItem id={item.id} name={item.name}/>)

    return (
        <div className={props.className}>
            {dialogItems}
        </div>
    );
}

export default DialogList;