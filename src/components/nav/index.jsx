import "./nav.scss";
import logo from "../../assets/icons/logo.svg";
import logoicon from "../../assets/icons/logo_icon.svg"
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";

function Nav() {
 
  const data = useContext(UserContext)

  const user = data.userdata;
  console.log(user)
  return (
    <>
    <div className="nav">
      <div className="nav-bar">
        <div>
        <picture>
    <source srcset={logoicon} media="(max-width: 500px)" />
    <img src={logo} alt="airtime to cash logo" />
                
</picture>
        </div>
        <div className="user-bar">
          <img
            src={
              user.avatar
            }
            alt="user avatar"
          />
          <p>{user.userName}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Nav;
