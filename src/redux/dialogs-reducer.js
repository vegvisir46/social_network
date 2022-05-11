let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogsData: [
        {id: 1, name: "Michael"},
        {id: 2, name: "Jim"},
        {id: 3, name: "Dwight"},
        {id: 4, name: "Oscar"},
        {id: 5, name: "Stanley"},
        {id: 6, name: "Creed"}
    ],
    messagesData: [
        {id: 1, message: "Hoooo...", dir: "in"},
        {id: 2, message: "...ooooh...", dir: "out"},
        {id: 3, message: "...ooooh...", dir: "in"},
        {id: 4, message: "...ooooh...", dir: "out"},
        {id: 5, message: "...ooooh...", dir: "in"},
        {id: 6, message: "...boi...", dir: "out"}
    ],
    newMessageBody: 'Enter something...'
}

const dialogsReducer = (state = initialState, action) => {

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