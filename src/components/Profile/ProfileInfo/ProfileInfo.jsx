import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={styles.avaDes}>
            <div className={styles.avatar}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"
                    alt=""/>
            </div>
            <div className={styles.descr}>
                <div className={styles.descrItem}>
                    Alex R.
                </div>
                <div className={styles.descrItem}>
                    Date of birth: 10 July
                </div>
                <div className={styles.descrItem}>
                    Education: TPU
                </div>
                <div className={styles.descrItem}>
                    Web Site: github.com/vegvisir46
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;


