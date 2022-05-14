import React from "react";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogsData
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

    let messagesElements = props.messagesPage.messagesData
        .map(message => <Message message={message.message} key={message.id} id={message.id} dir={message.dir}/>);

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.onMessageChange(body);
    }

    return (
        <div>
            <div className={styles.title}>Dialogs</div>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                    <textarea
                        onChange={onMessageChange}
                        className={styles.textArea}
                        name="" id="" cols="10" rows="5"
                        value={props.messagesPage.newMessageBody}/>
                    <div className={styles.sendBtn}>
                        <button onClick={sendMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;