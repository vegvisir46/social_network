import React from "react";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         onMessageChange: (text) => {
//             dispatch(updateNewMessageBodyActionCreator(text));
//         },
//         sendMessage: () => {
//             dispatch(addMessageActionCreator());
//         }
//     };
// };

const DialogsContainer = connect(mapStateToProps, {
    onMessageChange: updateNewMessageBodyActionCreator,
    sendMessage: addMessageActionCreator
})(Dialogs);

export default DialogsContainer;