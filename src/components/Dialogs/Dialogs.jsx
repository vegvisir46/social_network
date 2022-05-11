import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messagesData
        .map(message => <Message message={message.message} id={message.id} dir={message.dir}/>);

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body));
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
                        value={props.state.newMessageBody}/>
                    <div className={styles.sendBtn}>
                        <button onClick={sendMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;