import React from "react";
import Logo from "../Logo/Logo";
import styles from "./style.css";
import MenuItem from "./MenuItem/MenuItem"



export default class TopBar extends React.Component {

    render() {

        var logoStyle = {
            height: "2.5rem",
            width: "3rem",
            display: "table-cell",
            verticalAlign: "middle"
        };

        return (

            <div className={styles.container}>
                <Logo style={logoStyle}/>
                <div  style={{display: "inline-block", float: "right"}}>
                    
                    <MenuItem text="Contact"/>
                </div>
            </div>

        );
    }
}