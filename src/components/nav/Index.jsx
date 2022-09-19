import "./style.scss";
import logo from "../../assets/icons/logo.svg"

function Nav() {
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
        </>
    )
}

export default Nav;
