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
          <div className="footer-credit">
            <p>© 2022 Airtime2Cash. All rights reserved</p>
          </div>
          <div className='footer-icons'>
          <div className="footer-social"><img src={instagramicon} /> </div>
          <div className="footer-social"><img src={twittericon} /></div>
          <footer className="footer-social"><img src={youtubeicon} /></footer>
          </div>
          </div>
      </div>
      
    </footer>

  
    </>
  )
}
