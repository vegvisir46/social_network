import React from "react";
import preloader from "../../assets/images/preloader.svg";

let Preloader = (props) => {
    return <div style={{display: 'flex', justifyContent:'center'}}>
        <img src={preloader} alt='loading_logo'/>
    </div>
};

export default Preloader;
