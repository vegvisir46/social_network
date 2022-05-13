import React from "react";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(updateNewMessageBodyActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;