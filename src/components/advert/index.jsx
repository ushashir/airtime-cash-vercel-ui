import React from 'react'
import './style.scss'
import phonetouch from "../../assets/phonetouch.png";
import Button from "../common/button";


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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum praesentium dolorum necessitatibus libero, quas
                  reprehenderit.
                </p>
                <Button
                  value="Get Started"
                  style={{
                    fontSize: "1.6rem",
                    textAlign: "center",
                    textDecoration: "none",
                    borderRadius: "24px",
                    marginLeft:  "9rem",
                  }}
                />
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
