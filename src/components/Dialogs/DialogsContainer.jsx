import React from "react";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    // debugger
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(text));
    };

    return (<Dialogs sendMessage={sendMessage}
                     onMessageChange={onMessageChange}
                     dialogsData={state.messagesPage.dialogsData}
                     messagesData={state.messagesPage.messagesData}
                     newMessageBody={state.messagesPage.newMessageBody}
        />
    );
};

export default DialogsContainer;