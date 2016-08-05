import React from "react";
import styles from "./style.css";
import portraitImg from "./portrait.jpg";


export default class Banner extends React.Component {

    render() {

        return (

            <div className={styles.container}>
                <img src={portraitImg} className={styles.portrait}></img>
                <div className={styles.textsContainer}>
                    <h2>Full Stack Web Developer</h2>
                    <p>I learn quickly. I am one of those who always fill comfortable with
                        learning a new technology by themselves. I learned Django, Angular.js,
                        AWS services and Android SDK and APIs all by myself without being asked to do so.
                        Why? Because I can.</p>
                </div>
            </div>

        );
    }
}