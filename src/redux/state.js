import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        sidebar: [
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store;

window.store = store;