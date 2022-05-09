import React from "react";
import styles from "./Message.module.css";


const Message = (props) => {

    // return (
    //     <div className={s.message}>{props.message}</div>
    // )

    if (props.dir === "in") {
        return (
            <div className={styles.messageIn}>
                <div className={styles.message}>{props.message}</div>
            </div>

        )
    } else if (props.dir === "out") {
        return (
            <div className={styles.messageOut}>
                <div className={styles.message}>{props.message}</div>
            </div>
        )
    }


};

export default Message;