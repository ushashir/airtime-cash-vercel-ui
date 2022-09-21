import React from 'react';
import Nav from '../../components/landingpageNav';
import Hero from '../../components/hero';
import './style.scss'
import BodyText1 from '../../components/bodyText1';
import Service from '../../components/services';
import Advert from '../../components/advert';
import BodyText2 from '../../components/bodyText2';

function LandingPage(props) {
    return (
        <div className='html'>
            <Nav />
            <Hero />
            <BodyText1 />
            <Service />
            <Advert />
            <BodyText2 />
        </div>
    );
}

export default LandingPage;