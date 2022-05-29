import React from "react";
import styles from "./ProfileInfo.module.css";
import undUserPhoto from '../../img/jim.jpg'
import Preloader from "../../common/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={styles.avaDes}>
                <div className={styles.avatar}>
                    <img
                        src={props.profile.photos.large != null ? props.profile.photos.large : undUserPhoto}
                        //src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"
                        alt=""/>
                </div>
                <div className={styles.descr}>
                    <div className={styles.descrItem}>
                        {props.profile.fullName}
                    </div>
                    <div className={styles.descrItem}>
                        Looking for a job: {props.profile.lookingForAJobDescription}
                    </div>
                    <div className={styles.descrItem}>
                        About Me: {props.profile.aboutMe}
                    </div>
                    <div className={styles.descrItem}>
                        Web Site: {props.profile.contacts.github}
                    </div>
                    <div className={styles.descrItem + ' ' + styles.status}>
                        Status: <ProfileStatus status={props.status}
                                                        updateStatus={props.updateStatus}/>
                    </div>
                </div>
            </div>
        );
    }

};

export default ProfileInfo;