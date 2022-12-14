import React from "react";
import "./style.scss";
import hero_image from "../../assets/images/hero_image.png";
import Button from "../common/button";

export default function Hero() {
  return (
    <div className="hero">
      <div className="herogrid">
        <div className="left box">
          <div className="hero_left_text">
            <div className="hero_header_div">
              <h1 className="hero_header">
                Surplus Airtime? Don't worry we got your covered
              </h1>
            </div>
            <div className="hero_subtitle">
              Converting airtime to cash has never been easier. Problem-free
              transactions, easy cashouts, money alerts, all in less than five
              seconds!
            </div>
            <a href="/signup">
              <Button
                value="Get Started"
                style={{
                  fontSize: "1rem",
                  width: "9rem",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: "24px",
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
        </div>
        <div className="right box">
          <div className="hero-logo">
            <img src={hero_image} alt="airtime to cash logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
