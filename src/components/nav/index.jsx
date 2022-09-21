import "./nav.scss";
import logo from "../../assets/icons/logo.svg";
import avatar from '../../assets/images/dashboard_avata.png'
import { getUserData } from "../../api";



async function Nav() {
    const user = await getUserData()
   console.log(user)
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
