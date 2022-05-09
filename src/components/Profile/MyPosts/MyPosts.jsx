import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.postsData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    return (
        <div>
            <div className={styles.posts}>
                <div className={styles.postsTitle}>Posts</div>
                <input placeholder="your news..." className={styles.postsInput} type="text"/>
                <div className={styles.postsBtn}>
                    <button>Send</button>
                </div>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;