import React from "react";
import styles from "./style.css";
import GSAP from 'react-gsap-enhancer';
import TweenMax from "gsap";
import {RoughEase, Power0} from "gsap";

class MenuItem extends React.Component {

    moveAnimation(utils) {
        return TweenMax.to(utils.target, 1, {backgroundColor: "red"})
    }

    handleMouseEnter() {

        this.controller = this.addAnimation((utils) =>
            TweenMax.to(utils.target.find({id: "text"}), 0.45, {textShadow:"0 0 35px rgba(255, 255, 255, 0.5)"}));

        this.controller1 = this.addAnimation((utils) =>
            TweenMax.to(utils.target, 0.45, {borderColor: "rgba(55, 55, 55, 1)"}));

        this.controller.play();

        this.controller1.play();
    }

    handleMouseLeave() {

        this.controller.reverse();
        this.controller1.reverse();
    }

    render() {

        return (

            <div className={styles.container} onMouseLeave={this.handleMouseLeave.bind(this)} onMouseEnter={this.handleMouseEnter.bind(this)}>
                <div id="text" className={styles.text}>{this.props.text}</div>
            </div>

        );
    }
}

export default GSAP()(MenuItem)