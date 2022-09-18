import "./style.scss";
import Nav from "../../components/nav";
import Button from "../../components/common/button";
import logo from "../../assets/icons/logo.svg"
// import FormInput from "../../components/common/form/inputForm";
function UpdatePage(){
    
    return (
        <>
            <Nav />
        <div className="wrapper">
            <div className="top-bg"></div>
            <div className="update-form">
                    <img src={logo} alt="logo" />
                    <h3>Basic information</h3>
                <form className="form-data">
                <label htmlFor="firstName">First Name</label>
                <input className="form-input" type="text" name="firstName" placeholder="Enter your first name"/>
                <label htmlFor="lastName">Last Name</label>
                <input className="form-input" type="text" name="lastName" placeholder="Enter your last name"/>
                <label htmlFor="phone">Phone Number</label>
                <input className="form-input" type="tel" name="phone" placeholder="Enter your phone number"/>
                <label htmlFor="email">Email</label>
                <input className="form-input" type="email" name="email" placeholder="Enter your email"/>
                <Button value="save" type="submit"/>
                </form>
            </div>
        </div>
        </>
    )
}

export default UpdatePage
