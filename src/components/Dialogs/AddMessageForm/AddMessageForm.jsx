import styles from "./AddMessageForm.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.messages}>
            <Field component={Textarea}
                   className={styles.textArea}
                   validate={[required, maxLength50]}
                   name="newMessageBody" cols="10" rows="5"
                   placeholder="Enter your message"
            />
            <div className={styles.sendBtn}>
                <button>Send Message</button>
            </div>
        </form>
    )
};

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);