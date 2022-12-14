import React from 'react';
import Nav from '../../components/landingpageNav';
import Hero from '../../components/hero';
// import TestimonialSlider from '../../components/testimonialSlider';
import './style.scss'
import Footer from '../../components/footer_landing';
import BodyText1 from '../../components/bodyText1';
import Service from '../../components/services';
import Advert from '../../components/bodyAdv';
import BodyText2 from '../../components/bodyText2';
// import Testimonial from '../../components/testimonial';
import TestimonialSlider from '../../testimonials/testimonialSlider';


function LandingPage(props) {
  return (
    <>
      <div className="landingPg">
        <Nav />
        <Hero />
        <BodyText1 />
        <Service />
        <Advert />
        <BodyText2 />
        {/* <Testimonial /> */}
        <TestimonialSlider/>
        {/* <div className="arrow-pos">
          <div className="arrow">&lt;</div>
          <div className="testimonal-container">
            <TestimonialSlider
              title="Abraham Yusuf"
              message="Amazing platform! I have been transacting with Airtime2Cash for 2 months now and so far, it still
            looks promising."
            />
            <TestimonialSlider
              title="Yaya Ayo"
              message="Mistakenly recharged 6k excess airtime from my bank account 😔. Airtime2Cash came to my rescue, everything was easy and fast. Costumer service was 🤝 👍👍 "
            />
            <TestimonialSlider
              title="A Google User"
              message="I really like this App because it's fast and reliable. I was skeptical initially till I gave it a try and it worked
            just fine. Now I trasact any amount with them without fear."
            />
          </div>
          <div className="arrow">&gt;</div>
        </div>
        <div className="invi">
          <div className="testi">
            <h4>Abraham Yusuf</h4>
            <p>
              Amazing platform! I have been transacting with
              Airtime2Cash for 2 months now and so far, it still looks promising.
            </p>
          </div> */}
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
