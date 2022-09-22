import "./nav.scss";
import logo from "../../assets/icons/logo.svg";
import logoicon from "../../assets/icons/logo_icon.svg"
import { useEffect, useState } from "react";
import { getUserData } from "../../api";

function Nav(props) {
  const [user, setUser] = useState("");

  useEffect(() => {
    const data = async () => setUser(await getUserData());
    data();
  }, []);

  console.log(user);
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
              props.avatar ||
              "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
            }
            alt="user avatar"
          />
          <p>{props.userName}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Nav;
