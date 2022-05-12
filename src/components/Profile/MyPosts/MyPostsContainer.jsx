import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator, updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (<MyPosts
        updateNewPostText={onPostChange}
        addPost={onAddPost}
        postsData={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
    />);
};

export default MyPostsContainer;