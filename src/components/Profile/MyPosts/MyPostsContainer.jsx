import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator, updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let onAddPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };

                return (
                    <MyPosts updateNewPostText={onPostChange}
                             addPost={onAddPost}
                             postsData={state.profilePage.postsData}
                             newPostText={state.profilePage.newPostText}/>
                )
            }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;