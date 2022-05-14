let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: "First post", likesCount: 16},
        {id: 2, message: "Second post", likesCount: 23},
        {id: 3, message: "Third post", likesCount: 42}
    ],
    newPostText: 'Enter something...'
}

const profileReducer = (state = initialState, action) => {

        switch (action.type) {

            case ADD_POST: {

                let newPost = {
                    id: 4, message: state.newPostText, likesCount: 15
                };

                let stateCopy = {...state};
                stateCopy.postsData = [...state.postsData];
                stateCopy.postsData.push(newPost)
                stateCopy.newPostText = '';
                return stateCopy;
            }
            case
            UPDATE_NEW_POST_TEXT: {
                let stateCopy = {...state};
                stateCopy.newPostText = action.newText;
                return stateCopy;
            }
            default:
                return state;

        }
    }
;

export const addPostActionCreator = () => { // позже в одну строку
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};

export default profileReducer;