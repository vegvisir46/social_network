import React from "react";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div className={styles.banner}>
                <img
                    src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b47e97673b956ef015df1b6fe7ec9949e830eeb1dcf0e33a67494b1c8a4c04e4._RI_V_TTW_.jpg"
                    alt=""/>
            </div>

            <div className={styles.wrapper}>

                <ProfileInfo/>
                <MyPostsContainer />
            </div>
        </div>
    );
};

export default Profile;