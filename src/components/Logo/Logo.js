import React from "react";
import styles from "./styles.css";

const Logo = (props) => {

    return (
        <div style={{display: "inline-block", ...props.style}}>

	        <span className={styles.thickText}>BOAZ</span><span className={styles.boldText}>SHVARTZMAN</span>
        </div>
    )
};

export default Logo;
