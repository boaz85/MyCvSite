import React from 'react';
import TopBar from '../components/TopBar/TopBar';
import Banner from '../components/Banner/Banner';
import Skills from '../components/Skills/Skills';
import ScrollMagic from "scrollmagic";

export default class MainContainer extends React.Component {

    constructor() {
        super();
        this.controller = new ScrollMagic.Controller();

    }

    render() {
        return (
            <div>
                <TopBar ref="topBarElement"/>
                <Banner ref="bannerElement" controller={this.controller}/>
                <Skills ref="skillsElement"/>
            </div>
        );
    }
}