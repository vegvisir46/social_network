let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 7, message: state.newMessageBody, dir: "in"
            };
            state.messagesData.push(newMessage);
            state.newMessageBody = '';
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody;
            return state;

        default:
            return state;

    }
};

export const addMessageActionCreator = () => { // позже в одну строку
    return {
        type: ADD_MESSAGE
    }
};

export const updateNewMessageBodyActionCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newBody: body}
};

export default dialogsReducer;