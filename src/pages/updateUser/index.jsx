import "./style.scss";
import Nav from "../../components/nav";
import Button from "../../components/common/button";
import logo from "../../assets/icons/logo.svg";
import { useForm } from "react-hook-form";
import client, { updateUserData } from "../../api/index";

function UpdatePage() {

  const userData = {
    firstName: "John",
    lastName: "Doe",
    phone: "12345678901",
    email: "senior@dev.com",
  };
    
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: userData });
    
    watch()

    const onSubmit = async (data) => {
      console.log(data)
        const response = await updateUserData(data)
        console.log(response)
  };
  return (
    <>
      <Nav />
      <div className="wrapper">
        <div className="top-bg"></div>
        <div className="update-form">
          <img src={logo} alt="logo" />
          <h3>Basic information</h3>
                  <form className="form-data" onSubmit={handleSubmit(onSubmit)}>
                      
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-input"
              type="text"
              {...register("firstName", { minLength: 1 })}
              placeholder="Enter your first name"
            />
            {errors.firstName && <span>First name cannot be empty</span>}
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-input"
              type="text"
              {...register("lastName", { minLength: 1 })}
              placeholder="Enter your last name"
            />
            {errors.lastName && <span>Last name cannot be empty</span>}
            <label htmlFor="phone">Phone Number</label>
            <input
              className="form-input"
              type="tel"
              {...register("phone", { minLength: 10 })}
              placeholder="Enter your phone number"
            />
            {errors.phone && <span>Enter valid phone number</span>}
            <label htmlFor="email">Email</label>
            {/* <input
              className="form-input"
              type="email"
              {...register("email", {
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              placeholder="Enter your email"
            />
            {errors.email && <span>Enter valid email</span>} */}
            <Button value="save" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdatePage;
