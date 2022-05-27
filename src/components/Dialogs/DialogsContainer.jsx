import React from "react";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    };
};

export default compose(
    connect(mapStateToProps, {
        sendMessage: addMessageActionCreator
    }),
    withAuthRedirect
)(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
//
// // let mapDispatchToProps = (dispatch) => {
// //     return {
// //         onMessageChange: (text) => {
// //             dispatch(updateNewMessageBodyActionCreator(text));
// //         },
// //         sendMessage: () => {
// //             dispatch(addMessageActionCreator());
// //         }
// //     };
// // };