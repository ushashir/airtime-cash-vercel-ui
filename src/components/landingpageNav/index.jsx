import "./style.scss";
import logo from "../../assets/icons/logo.svg";

function Nav() {
  return (
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
            <div className="btn" href="/">
              Login
            </div>
          </ul>
        </div>
      </nav>
      <label />
      <div className="home-logo2">
        <img src={logo} alt="airtime to cash logo"></img>
      </div>
      <div className="overlay"></div>

      {/* <div className="mobile">
          <input type="checkbox" id="hamburger-input" class="burger-shower" />
          <label id="hamburger-menu" for="hamburger-input">
            <nav id="sidebar-menu">
              <h3>Menu</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Store</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
    return (
        <>
            <nav className="navbar">
                <div className="logo-image">
                    <img src={logo} alt="airtime to cash logo"></img>
                </div>
                <div>
                    <span className="profile-icon">
                        <img src="" alt="profile"/>
                        Tunde
                    </span>
                </div>
            </nav>
          </label>
          <div className="home-logo2">
            <img src={logo} alt="airtime to cash logo"></img>
          </div>
          <div class="overlay"></div>
        </div> */}
    </div>
  );
}

export default Nav;