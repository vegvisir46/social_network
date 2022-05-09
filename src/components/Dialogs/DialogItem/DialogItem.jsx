import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import styles from "./DialogItem.module.css";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={activeClass}>{props.name} </NavLink>
        </div>
    )
};

export default DialogItem;

function activeClass(navData) {
    return (navData.isActive ? styles.active : styles.dialog.a);
}