import React from 'react';
import Nav from '../../components/nav';
import Hero from '../../components/hero';
import TestimonialSlider from '../../components/testimonialSlider';
import './style.scss'
import Footer from '../../components/footer_landing';

function LandingPage(props) {
    return (
        <div>
            <Nav />
            <Hero />
            <div className='testimonal-container'>
            <TestimonialSlider title="Chi billions" message="the react lord" />
            <TestimonialSlider title="Pod B" message="The best pod in node stack" />
            <TestimonialSlider title="node stack" message="The best stack in decagon cohort 11B" />
          </div>
    <Footer />
        </div>
    );
}

export default LandingPage;