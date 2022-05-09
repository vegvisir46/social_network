import React from "react";
import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://www.фото-у-бегемота.рф/wp-content/uploads/2015/04/imac-icon.png" className={styles.logo} alt=""/>
            <div className="search">
                <input type="text" className={styles.searchInput}/>
                <button className={styles.searchBtn}>Search</button>
            </div>

        </header>)
}

export default Header;