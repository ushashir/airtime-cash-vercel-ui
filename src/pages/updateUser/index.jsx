import "./style.scss";
import Nav from "../../components/nav";
import Button from "../../components/common/button";
import logo from "../../assets/icons/logo.svg"
function UpdatePage(){
    
    return (
        <>
            <Nav />
            <div className="top-bg"></div>
            <div className="form-input">
                <img src={logo} alt="logo" />
                <form>
            <Button value="save" type="submit"/>
                </form>q
            </div>
        </>
    )
}

export default UpdatePage
