import React from "react";
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={styles.postItem}>
                <div className={styles.postData}>
                    <img src="https://i.pinimg.com/736x/85/46/93/85469324181dad81347927212d54c9c8.jpg" alt=""/>
                    <div className={styles.message}>
                        {props.message}
                    </div>
                </div>
                <div className={styles.likes}>
                    <span>♥</span> {props.likesCount}
                </div>

            </div>
        </div>
    );
};

export default Post;