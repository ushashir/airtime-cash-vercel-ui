import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { hasToken } from "../../utils/isLoggedIn";
import { Link } from "react-router-dom";


const Nav = () => {
  const { user } = useContext(UserContext);
  const imageAvatar = user.avatar || 'https://www.nicepng.com/png/detail/115-1150821_default-avatar-comments-sign-in-icon-png.png';
  const forwardArrow = 'https://media.istockphoto.com/vectors/arrow-line-vector-icon-on-white-background-vector-id1093587922?k=20&m=1093587922&s=612x612&w=0&h=nknwVyikzurWM1Ai6NaKL6VD5gi0pbOCb2CW3LNpH4A='
  const [logged, setLogged] = useState(false)


  useEffect(() => {
    hasToken() && setLogged(true)
  }, [])

  return (
    <div className="">
      <div className="newer">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menub">
              <a href="/">
                <li>Home</li>
              </a>
              <a href="/">
                <li>About Us</li>
              </a>
              <a href="/">
                <li>Products</li>
              </a>
              <a href="/">
                <li>Contact Us</li>
              </a>
              {
                !logged && (
                  <a href="/login">
                    <li>Login</li>
                  </a>
                )
              }
            </ul>
          </div>
        </nav>

        <div className="home-logo">
          <img src={logo} alt="airtime to cash logo" className="nava"></img>
        </div>
      </div>

      <div className="body">
        <input type="checkbox" id="hamburger-input" class="burger-shower" />
        <label id="hamburger-menu" for="hamburger-input"></label>
        <nav className="nav-bar" id="sidebar-menu">
          <div className="home-logo">
            <img src={logo} alt="airtime to cash logo" className="navlog"></img>
          </div>
          <div className="menudiv">
            <ul className="menu">
              <li>
                <a className="home_link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="linkss" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a className="linkss" href="/">
                  Products
                </a>
              </li>
              <li>
                <a className="linkss" href="/">
                  Contact Us
                </a>
              </li>
              {
                logged
                  ? (
                    <div className="avatarsection">
                      <img src={imageAvatar} alt="user avatar" className="avatar" />
                      <Link to='/dashboard'>
                        <img src={forwardArrow} alt="enter" className="avatar" width="5" height="6" />
                      </Link>
                    </div>
                  )
                  : (
                    <div className="btn" href="/login">
                      <a href="/login">Login</a>
                    </div>
                  )
              }
            </ul>
          </div>
        </nav>
        <label />
        <div className="home-logo2">
          <img src={logo} alt="airtime to cash logo"></img>
        </div>
        <div class="overlay"></div>
      </div>
    </div>
  );
}

export default Nav
