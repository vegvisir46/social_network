import React from "react";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {
    // debugger


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageBodyActionCreator(text));
                };

                return (
                    <Dialogs sendMessage={sendMessage}
                             onMessageChange={onMessageChange}
                             dialogsData={state.messagesPage.dialogsData}
                             messagesData={state.messagesPage.messagesData}
                             newMessageBody={state.messagesPage.newMessageBody}/>
                )
            }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;