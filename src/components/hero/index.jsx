import React from 'react'
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
              <h1 className='hero_header'>Surplus Airtime?<br />Don't worry we<br />got your covered</h1>
            </div>
            <div className="hero_subtitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem recusandae facilis impedit laudantium voluptatibus corporis, adipisci atque error illum fugit?
            </div>
            <Button className="hero-btn" />
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
