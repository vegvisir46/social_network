import React from "react";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";


// const DialogsContainer = (props) => {
//     // debugger
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//
//                 let sendMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 }
//
//                 let onMessageChange = (text) => {
//                     store.dispatch(updateNewMessageBodyActionCreator(text));
//                 };
//
//                 return (
//                     <Dialogs sendMessage={sendMessage}
//                              onMessageChange={onMessageChange}
//                              dialogsData={state.messagesPage.dialogsData}
//                              messagesData={state.messagesPage.messagesData}
//                              newMessageBody={state.messagesPage.newMessageBody}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };

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