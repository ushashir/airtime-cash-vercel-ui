import React from 'react'
import footerlogo from '../../assets/icons/footerlogo.svg'
import "./style.scss"
import instagramicon from '../../assets/icons/instagramicon.svg'
import twittericon from '../../assets/icons/twittericon.svg'
import youtubeicon from '../../assets/icons/youtubeicon.svg'

export default function Footer(props) {
  return (
    <>
    <footer>
      <div className='footer-container'>
        <div className='footer-div'>
          <div className="footerimage"><img src={footerlogo} alt="Airtime2cash logo"></img></div>
          <div className="footerMenu">
            <ul className="footerUL">
              <li>Home</li>
              <li>About Airtime2Cash</li>
              <li>Contact</li>
            </ul>
          </div>
          </div>
          <hr />
          <div className='footer_labels'>
          <p>© 2022 Airtime2Cash. All rights reserved</p>
          <div className='footer-icons'>
          <img src={instagramicon} /> 
          <img src={twittericon} />
          <img src={youtubeicon} />
          </div>
          </div>
      </div>
      
    </footer>

  
    </>
  )
}
