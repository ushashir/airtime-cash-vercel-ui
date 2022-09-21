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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          quam malesuada in ultrices augue ac maecenas.
        </p>
      </div>

      <div className="box2 serv">
        <div className="serv_icon">
          <img src={icon2} alt="service icon"></img>
        </div>
        <p className="serv_heading">Login or Register</p>
        <br />
        <p className="serv_body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          quam malesuada in ultrices augue ac maecenas.
        </p>
      </div>

      <div className="box3 serv">
        <div className="serv_icon">
          <img src={icon3} alt="service icon"></img>
        </div>
        <p className="serv_heading">Login or Register</p>
        <br />
        <p className="serv_body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
          quam malesuada in ultrices augue ac maecenas.
        </p>
      </div>
    </div>
  );
}
