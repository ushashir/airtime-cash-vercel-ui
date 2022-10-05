import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { hasToken } from "../../utils/isLoggedIn";


const Nav = () => {
  const { user } = useContext(UserContext);
  const imageAvatar = user.avatar || 'https://www.nicepng.com/png/detail/115-1150821_default-avatar-comments-sign-in-icon-png.png';
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
