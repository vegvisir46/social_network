import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator, updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
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