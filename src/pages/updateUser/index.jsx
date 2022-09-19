import "./style.scss";
import Nav from "../../components/nav";
import Button from "../../components/common/button";
import logo from "../../assets/icons/logo.svg";
import { useForm } from "react-hook-form";
import { updateUserData, getUserData } from "../../api/index";
import { useEffect, useState } from "react";

function UpdatePage() {
    const [userData, setUserData] = useState("")
    useEffect(() => {
       async () => {
         setUserData(await getUserData())
     }
},[])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: userData });
    
    watch()

    const onSubmit = async (data) => {
        try {
            const response = await updateUserData(data)
            console.log(response)
            if (response.status === 200) {
                console.log(response.data)
            }
        } catch (error) {
            console.log(error)
        }

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
                          {...register("firstName", {
                              minLength: 1,
                              pattern: /^[A-Za-z][A-Za-z_]$/
                          })}
              placeholder="Enter your first name"
            />
            {errors.firstName && <span className="error">Please enter valid first name</span>}
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-input"
              type="text"
                          {...register("lastName", {
                              minLength: 1,
                pattern: /^[A-Za-z][A-Za-z_]$/
              })}
              placeholder="Enter your last name"
            />
            {errors.lastName && <span className="error">Please enter valid last name</span>}
            <label htmlFor="phone">Phone Number</label>
            <input
              className="form-input"
              type="tel"
              {...register("phone", { minLength: 10, pattern: "^[0-9]" })}
              placeholder="Enter your phone number"
            />
            {errors.phone && <span className="error">Enter valid phone number</span>}
          {/*  <label htmlFor="email">Email</label>
           <input
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
