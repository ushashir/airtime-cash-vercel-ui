import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import logoicon from "../../assets/icons/logo_icon.svg";
import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import UserProfileDropdown from "../dropdown";
import dropDownIcon from "../../assets/icons/dropdownicon.svg";

function Nav() {
  const { user } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const imageAvatar = user.avatar || 'https://www.nicepng.com/png/detail/115-1150821_default-avatar-comments-sign-in-icon-png.png';
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowDropdown(false)
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });
  return (
    <>
      <div className="nav">
        <div className="nav-bar">
          <div>
            <Link to={"/dashboard"}>
              <picture>
                <source srcSet={logoicon} media="(max-width: 500px)" />
                <img src={logo} alt="airtime to cash logo" style={{ padding: "10px" }} />
              </picture>
            </Link>
          </div>
          <div className="user-bar">
            <span
              style={{
                display: "flex",
                gap: "2px",
                alignItems: "center"
              }}
              ref={ref} onClick={() => setShowDropdown(prev => !prev)}>
              <img src={imageAvatar} alt="user avatar" className="avatar" />
              <p>{user.userName}</p>
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
