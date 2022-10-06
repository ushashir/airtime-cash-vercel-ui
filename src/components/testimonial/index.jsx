import React from 'react'
import './style.scss'
import scroll from "../../assets/images/scroll.png";

export default function Testimonial() {
  return (
    <div className="testiBody">
      <div className="testimonialContainer">
        <div className="scrollLeft scroll">
          <img src={scroll} alt="left scroll" />
        </div>
        <div className="testimonialBox">
          <p>
            Amazing platform! I have been transacting with Airtime2Cash for 2
            months now and so far, it still looks promising.
          </p>
        </div>
        <div className="testimonialBox testi">
          <p>
            Mistakenly recharged 6k excess airtime from my bank account 😔.
            Airtime2Cash came to my rescue, everything was.
            Costumer service was 🤝 👍👍
          </p>
        </div>
        <div className="testimonialBox testi">
          <p>
            I really like this App because it's fast and reliable. I was
            skeptical initially till I gave it a try and it worked just fine.
      
          </p>
        </div>
        <div className="scrollRight scroll">
          <img src={scroll} alt="right scroll" />
        </div>
      </div>
    </div>
  );
}
