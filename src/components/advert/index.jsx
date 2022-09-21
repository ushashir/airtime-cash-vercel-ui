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
                  Airtime2Cash, your favourite airtime converter, is a platform that offers convenient, seamless conversion of airtime to 
                  cash with a high payout to your bank account.
                </p>
                <Button
                  value="Get Started"
                  style={{
                    fontSize: "1rem",
                    textAlign: "left",
                    textDecoration: "none",
                    borderRadius: "24px",
                    marginLeft: "5.625rem",
                    paddingLeft: "3rem",
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
