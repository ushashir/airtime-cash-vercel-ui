import React from 'react'
import './style.scss'
import icon1 from "../../assets/icons/service_icon1.png";
import icon2 from "../../assets/icons/service_icon2.png";
import icon3 from "../../assets/icons/service_icon3.png";

export default function Service() {
  return (
    <div className="service_body">
      <div className="box1 serv">
        <div className="serv_icon">
          <img src={icon1} alt="service icon"></img>
        </div>
        <p className="serv_heading">Login or Register</p>
        <br />
        <p className="serv_body">
          Login to start the seamless journey of converting your excess airtime to cash.
          Can't login? Register to begin this journey with us!
        </p>
      </div>

      <div className="box2 serv">
        <div className="serv_icon">
          <img src={icon2} alt="service icon"></img>
        </div>
        <p className="serv_heading">Deposit From Dashboard</p>
        <br />
        <p className="serv_body">
          Deposit surplus airtime on your dashboard by simply making the quickest transfer from your device
          to your wallet.
        </p>
      </div>

      <div className="box3 serv">
        <div className="serv_icon">
          <img src={icon3} alt="service icon"></img>
        </div>
        <p className="serv_heading">Convert</p>
        <br />
        <p className="serv_body">
          Conveniently trade your airtime for cash by
          interacting with prospective buyers
        </p>
      </div>
    </div>
  );
}
