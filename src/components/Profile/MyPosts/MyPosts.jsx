import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator} from "../../../redux/state";
import {updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.postsData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div>
            <div className={styles.posts}>
                <div className={styles.postsTitle}>Posts</div>
                <input
                    ref={newPostElement}
                    onChange={ onPostChange }
                    className={styles.postsInput}
                    type="text"
                    value={props.newPostText}/>
                {/*<textarea className={styles.postsInput}*/}
                {/*          onChange={onPostChange}*/}
                {/*          ref={newPostElement}*/}
                {/*          value={props.newPostText}/>*/}
                <div className={styles.postsBtn}>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;