import styles from "./NewPostForm.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.newPostForm}>
            <Field component="input"
                   className={styles.postsInput}
                   name="newPostBody"
                   type="text"
                   placeholder="Enter your message"/>
            <div className={styles.postsBtn}>
                <button>Add Post</button>
            </div>
        </form>
    )
};

export default reduxForm({form: "myPostsAddPostForm"})(AddPostForm);