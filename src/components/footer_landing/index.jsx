import React from 'react'
import footerlogo from '../../assets/icons/footerlogo.svg'
import "./style.scss"

export default function Footer(props) {
  return (
    <>
    <footer>
      <div className='footer-div'>
          <div className="footerimage"><img src={footerlogo} alt="Airtime2cash logo"></img></div>
          <div className="footerMenu">
            <ul className="footerUL">
              <li>Home</li>
              <li>About Airtime2Cash</li>
              <li>Contact</li>
            </ul>
          </div>
          <hr />
      </div>
      
    </footer>

  
    </>
  )
}
