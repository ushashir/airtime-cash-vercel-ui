import React from 'react'
import "./style.scss";
import rectangle from "../../assets/Rectangle.png";

export default function BodyText1() {
    return (
      <div className="enc">
        <div className="rectangle">
          <img src={rectangle} alt="rectangle"></img>
        </div>
        <div className="encompass1">
          <div className="bodytext1">
            <h2>Change Surplus Airtime to Real Cash </h2>
          </div>
          <div className="bodyText1Subtitle">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              blanditiis at nostrum corporis provident id.
            </p>
          </div>
        </div>
      </div>
    );
}
