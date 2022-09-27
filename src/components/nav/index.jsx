import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import logoicon from "../../assets/icons/logo_icon.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import UserProfileDropdown from "../dropdown";
import dropDownIcon from "../../assets/icons/dropdownicon.svg";

function Nav() {
  const { user } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="nav-bar">
          <div>
            <picture>
              <source srcSet={logoicon} media="(max-width: 500px)" />
              <img src={logo} alt="airtime to cash logo" />
            </picture>
          </div>
          <div className="user-bar">
            <img src={user.avatar} alt="user avatar" className="avater" />
            <p>{user.userName}</p>
            <span onClick={() =>  setShowDropdown(!showDropdown)}>
              <img
                style={{ width: "18px", paddingTop: "5px" }}
                src={dropDownIcon}
              />
            </span>
          </div>
          {showDropdown && <UserProfileDropdown showDropdown={showDropdown} />}
        </div>
      </div>
    </>
  );
}

export default Nav;
