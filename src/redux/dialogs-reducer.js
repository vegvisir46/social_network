let ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 7, message: action.newMessageBody, dir: "in"
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            };
        }
        default:
            return state;
    }
};

// action creators
export const addMessageActionCreator = (newMessageBody) => { // позже в одну строку
    return {
        type: ADD_MESSAGE, newMessageBody
    }
};


export default dialogsReducer;