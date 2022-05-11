let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {

    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 7, message: state.newMessageBody, dir: "in"
        };
        state.messagesData.push(newMessage);
        state.newMessageBody = '';
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.newBody;
    }

    return state;
}

export default dialogsReducer;