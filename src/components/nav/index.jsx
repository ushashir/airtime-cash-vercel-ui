import "./nav.scss";
import logo from "../../assets/icons/logo.svg";
import {useEffect, useState} from "react"
import { getUserData } from "../../api";



function Nav(props) {
    // const[user, setUser] = useState("")

    // useEffect(() => {
    //     const data = async () => setUser(await getUserData())
    //     data()  
    // },[])
    
//    console.log(user)
    return (
        <div className="nav-bar">
            <div>
                <img src={logo} alt="airtime to cash logo"></img>
            </div>
            <div className="user-bar">
            <img src={props.avatar} alt="user avatar" /> 
            <p>{ props.userName}</p>
            </div>
    </div>
  );
}

export default Nav;
