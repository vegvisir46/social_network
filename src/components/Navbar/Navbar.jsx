import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {

    let person = props.sitebar.map(person => {
        return (
            <div className={styles.person}>
                <img src="https://i.pinimg.com/736x/85/46/93/85469324181dad81347927212d54c9c8.jpg" alt=""/>
                <div className={styles.name}>{person.name}</div>
            </div>
        )
    })

    return (
        <nav className={styles.nav}>
            <div className={styles.items}>
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
            </div>

            <div className={styles.sitebar}>
                <div className={styles.title}>Friends</div>
                <div className={styles.persons}>
                    {person}
                </div>
            </div>

        </nav>
    );
};

function activeClass(navData) {
    return (navData.isActive ? styles.active : styles.item.a);
}

export default Navbar;