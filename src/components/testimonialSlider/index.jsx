import React from 'react'
import "./style.scss"

export default function TestimonialSlider(props) {
  return (
    <div className="testimonial-slider-div onene">
      <h4 className='testimonial-sider-header'>{props.title}</h4>
      <p>{props.message}</p>
      
    </div>
  )
}
