import styles from "./NewPostForm.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.newPostForm}>
            <Field component={Textarea}
                   className={styles.postsInput}
                   validate={[required, maxLength10]}
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