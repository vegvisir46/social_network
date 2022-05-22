let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: "First post", likesCount: 16},
        {id: 2, message: "Second post", likesCount: 23},
        {id: 3, message: "Third post", likesCount: 42}
    ],
    newPostText: 'Enter something...',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4, message: state.newPostText, likesCount: 15
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPost: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => { // позже в одну строку
    return {
        type: ADD_POST
    }
};
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
};


export default profileReducer;