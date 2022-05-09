import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.postsData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost(newPostElement.current.value);
    };


    return (
        <div>
            <div className={styles.posts}>
                <div className={styles.postsTitle}>Posts</div>
                <input
                    ref={newPostElement}
                    placeholder="your news..."
                    className={styles.postsInput}
                    type="text"/>
                <div className={styles.postsBtn}>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;