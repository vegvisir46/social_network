import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator, updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//
//                 let onAddPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//
//                 let onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextActionCreator(text));
//                 };
//
//                 return (
//                     <MyPosts updateNewPostText={onPostChange}
//                              addPost={onAddPost}
//                              postsData={state.profilePage.postsData}
//                              newPostText={state.profilePage.newPostText}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;