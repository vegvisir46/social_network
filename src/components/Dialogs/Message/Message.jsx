import React from "react";
import s from "./Message.module.css";


const Message = (props) => {

    // return (
    //     <div className={s.message}>{props.message}</div>
    // )

    if (props.dir === "in") {
        return (
            <div className={s.messageIn}>
                <div className={s.message}>{props.message}</div>
            </div>

        )
    } else if (props.dir === "out") {
        return (
            <div className={s.messageOut}>
                <div className={s.message}>{props.message}</div>
            </div>
        )
    }


};

export default Message;