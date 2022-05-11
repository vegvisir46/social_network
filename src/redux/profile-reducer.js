let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 4, message: state.newPostText, likesCount: 15
        };
        state.postsData.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }

    return state;
}

export default profileReducer;