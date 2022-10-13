import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./style.css";
import React from "react";
import {TestimonialsStyles}  from "./testimonialStyles"
import { Testimonials } from "./testimonial";
import scroll from "../assets/images/scroll.png"
import { BsLock } from "react-icons/bs";


const TestimonialSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          lazyLoad: true,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          lazyLoad: true,
          autoplay: true,
          autoplaySpeed: 2000,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
          <TestimonialsStyles>
             
        
              {/* <img src={scroll} alt="right scroll" style={{ display:"inline-block"}}/> */}
        
        <div className="slider-Container">
          {/* <div className="tag">
            <h1>Testimonials Gallery</h1>
          </div> */}
          <div className="imgslider">
            <Slider {...settings}>
              {Testimonials.map((item) => (
                <div key={item.id} className="tst-con">
                  <span className="Testimonial-display">
                    <h4 className="tst-header"> {item.identity}</h4>
                    <p className="tst-details">{item.details}</p>
                  </span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        
          {/* <img src={scroll} alt="right scroll" /> */}
            
              
      </TestimonialsStyles>
    </>
  );
};
export default TestimonialSlider;
