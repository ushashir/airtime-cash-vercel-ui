import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Nav() {
  const { user } = useContext(UserContext)

  return (
    <>
      <div className="nav">
        <div className="nav-bar">
          <div>
            <picture>
              {/* <source srcset={logoicon} media="(max-width: 500px)" /> */}
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
