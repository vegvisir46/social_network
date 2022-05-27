import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>

            <div className={styles.leftZone}>
                <img src="https://www.фото-у-бегемота.рф/wp-content/uploads/2015/04/imac-icon.png"
                     className={styles.logo} alt=""/>
                <div className={styles.search}>
                    <input type="text" className={styles.searchInput}/>
                    <button className={styles.searchBtn}>Search</button>
                </div>
            </div>
            <div className={styles.loginBlock}>
                {props.isAuth ? <div className={styles.accField}>
                        <div>{props.login}</div>
                        <button onClick={props.logout} className={styles.logOutBtn}>Log Out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>)
}

export default Header;
