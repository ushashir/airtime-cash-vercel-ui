import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import avatar from '../../assets/images/dashboard_avata.png'




function Nav() {
    return (
        <div className="nav">
        <div className="nav-bar">
            <div>
                <img src={logo} alt="airtime to cash logo"></img>
            </div>
            <div className="user-bar">
            <img src={avatar} alt="user avatar" />
                <p>Ushahemba</p>
            </div>
            </div>
            </div>
  );
}

export default Nav;