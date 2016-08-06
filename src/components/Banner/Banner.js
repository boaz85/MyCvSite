import React from "react";
import styles from "./style.css";
import portraitImg from "./portrait.jpg";
import ScrollMagic from "scrollmagic";
require('animation.gsap');
require('debug.addIndicators');
import TweenMax from "gsap";


export default class Banner extends React.Component {

    initScrollMagic(element) {
        element.blurValue = 0;

        function applyBlur()
        {
            TweenMax.set(element, {webkitFilter:"blur(" +element.blurValue + "px)"});
        }
        var tween = TweenMax.to(element, 1, {blurValue: 3, onUpdate:applyBlur});

        // build scene
        var height = element.offsetHeight;
        var scene = new ScrollMagic.Scene({triggerElement: element, offset: height + 20, duration: 300})
            .setTween(tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(this.props.controller);
    }


    render() {

        return (

            <div ref={this.initScrollMagic.bind(this)} className={styles.container}>
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