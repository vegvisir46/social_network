import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" className={activeClass}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" className={activeClass}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/news" className={activeClass}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/music" className={activeClass}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings" className={activeClass}>Settings</NavLink>
            </div>
        </nav>
    );
};

function activeClass(navData) {
    return (navData.isActive ? styles.active : styles.item.a);
}

export default Navbar;