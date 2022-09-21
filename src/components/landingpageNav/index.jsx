import "./style.scss";
import logo from "../../assets/icons/logo.svg";


const  Nav = () => {
  return (
    <>
      <div className="body">
        <input type="checkbox" id="hamburger-input" class="burger-shower" />
        <label id="hamburger-menu" for="hamburger-input"></label>
        <nav className="nav-bar" id="sidebar-menu">
          <div className="home-logo">
            <img src={logo} alt="airtime to cash logo"></img>
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
                <div className="btn" href="/login">
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
    </>
  );
}

export default Nav
