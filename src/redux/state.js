let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "First post", likesCount: 16},
                {id: 2, message: "Second post", likesCount: 23},
                {id: 3, message: "Third post", likesCount: 42}
            ],
            newPostText: 'Enter something...'
        },

        messagesPage: {
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
        },

        sitebar: [
            {id: 1, name: "Michael", imgSrc: "michael"},
            {id: 2, name: "Jim", imgSrc: "jim"},
            {id: 3, name: "Dwight", imgSrc: "dwight"}
        ]
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4, message: this._state.profilePage.newPostText, likesCount: 15
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 7, message: this._state.messagesPage.newMessageBody, dir: "in"
            }
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageBody = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.newBody;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => { // позже в одну строку
    return {
        type: ADD_POST
    }
};
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};

export const addMessageActionCreator = () => { // позже в одну строку
    return {
        type: ADD_MESSAGE
    }
};
export const updateNewMessageBodyActionCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newBody: body}
};

export default store;

window.store = store;