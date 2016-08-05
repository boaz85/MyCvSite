import React from 'react';
import TopBar from '../components/TopBar/TopBar';
import Banner from '../components/Banner/Banner';
import Skills from '../components/Skills/Skills';

export default class MainContainer extends React.Component {

    render() {
        return (
            <div>
                <TopBar ref="topBarElement"/>
                <Banner ref="bannerElement"/>
                <Skills ref="skillsElement"/>
            </div>
        );
    }
}