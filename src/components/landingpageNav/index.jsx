import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import smalllogo from "../../assets/images/mobilehomelogo.png";


const Nav = () => {
  
  return (
    <div>
      {/* <div className="newer">
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
              <a href="/login">
                <li>Login</li>
              </a>
            </ul>
          </div>
        </nav>

        <div className="home-logo">
          <img src={logo} alt="airtime to cash logo" className="nava"></img>
        </div>
        <img src={smalllogo} alt="airtime to cash logo" className="nava"></img>
      </div> */}

      {/* <div className="phoneMenu">
     
      </div> */}

      <div className="mobileMenu">
        <div className="mobileMenuLogo">
          <img src={logo} alt="airtime to cash logo"></img>
        </div>

        <div className="mobileMenuHamburger">
          <div className="hamburgerLineAll">
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
            <div className="hamburgerLine"></div>
          </div>

          <div className="mobileMenuDropdown"></div>
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
              <a href="/login">
                <div className="btn navHomeBtn" href="/login">
                  Login
                </div>
              </a>
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
