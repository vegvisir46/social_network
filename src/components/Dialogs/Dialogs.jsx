import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messagesData
        .map(message => <Message message={message.message} id={message.id} dir={message.dir}/>);

    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert (text);
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
                    <textarea ref={newMessage} className={styles.textArea} name="" id="" cols="10" rows="5"></textarea>
                    <div className={styles.sendBtn}>
                        <button onClick={ sendMessage }>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;