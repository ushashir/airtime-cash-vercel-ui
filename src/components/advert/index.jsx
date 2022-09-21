import React from 'react'
import './style.scss'
import phonetouch from "../../assets/phonetouch.png";


export default function Adevert() {
  return (
    <div className="adv_body">
      <div className="advert_bgdiv">
        <div className="adv_box">
          <div className="adv_left">
            <div className="advert_content">
              <div className="advert_text">
                <h2>The best platform for your convenient airtime exchange</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                  praesentium dolorum necessitatibus libero, quas reprehenderit.
                </p>
                <div className="my-btn">Get Started</div>
              </div>
            </div>
          </div>
          <div className="adv_right">
            <div className="phonetouch">
              <img src={phonetouch} alt="hand touching phone"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
