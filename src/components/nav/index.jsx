import "./nav.scss";
import logo from "../../assets/icons/logo.svg";




function Nav(props) {
    // const[user, setUser] = useState("")

    // useEffect(() => {
    //     const data = async () => setUser(await getUserData())
    //     data()  
    // },[])
    
//    console.log(user)
    return (
        <div className="nav">
            <div className="nav-bar">
                <div>
                    <img src={logo} alt="airtime to cash logo"></img>
                </div>
                <div className="user-bar">
                    {/* <img src={avatar} alt="user avatar" /> */}
                    <p>Ushahemba</p>
                </div>
            </div>
        </div>
    );
}

export default Nav;
