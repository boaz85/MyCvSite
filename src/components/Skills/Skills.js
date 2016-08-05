import React from "react";
import styles from "./style.css";


export default class Skills extends React.Component {

    render() {

        return (

            <div className={styles.container}>
                <div className={styles.textsContainer}>
                    <h2>Backend</h2>
                    <p>Django. The most popular Python web framework.</p>
                </div>
            </div>

        );
    }
}