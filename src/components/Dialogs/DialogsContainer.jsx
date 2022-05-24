import React from "react";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    };
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);


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
})(AuthRedirectComponent);

export default DialogsContainer;