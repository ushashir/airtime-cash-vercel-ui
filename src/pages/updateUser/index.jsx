import "./style.scss";
import Nav from "../../components/nav";
import Button from "../../components/common/button";
import logo from "../../assets/icons/logo.svg";
import { useForm } from "react-hook-form";
import { updateUserData, getUserData } from "../../api/index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function UpdatePage() {
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUserUpdated } = useContext(UserContext)

  const navigate = useNavigate();
  useEffect(() => {
    getUserData().then((data) => {
      setUserData(data.response)
    });
    setIsLoading(true);
  }, []);
  console.log("user", userData);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  watch();
  const updateProfile = async () => {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        Swal.fire("Uploading");
        const res = await updateUserData({ avatar: e.target.result });

        if (res.status === 200) {
          console.log("is uploaded");
          Swal.fire({
            title: "Your uploaded picture",
            imageUrl: e.target.result,
            imageAlt: "The uploaded picture",
          });
          setUserUpdated(true);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await updateUserData(data);
      if (response.status === 200) {
        setUserData(response.data);

        Swal.fire(
          "Success",
          "Your profile has been updated successfully",
          "success"
        );

        setTimeout(() => {
          navigate("/dashboard");
        }, 5000);
      }
    } catch (error) {
      Swal.fire("Oops", "Something went wrong, Try again", "error");
      console.log(error);
    }
  };
  return (
    <>
      <Nav />
      <div className="update-page-wrapper">
        <div className="update-page-top-bg"></div>
        <div className="update-page-update-form">
          <img src={logo} alt="logo" />
          <h3>Basic information</h3>
          {!isLoading ? (
            "Loading"
          ) : (
            <form
              className="update-page-form-data"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="firstName">First Name</label>
              <input
                className="update-page-form-input"
                defaultValue={userData.firstName}
                type="text"
                {...register("firstName", {
                  minLength: 2,
                  required: true,
                  pattern: /([A-ZÀ-ÿa-z]+)+/,
                })}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <span className="update-page-error">
                  Please enter valid first name
                </span>
              )}
              <label htmlFor="lastName">Last Name</label>
              <input
                defaultValue={userData.lastName}
                className="update-page-form-input"
                type="text"
                {...register("lastName", {
                  minLength: 2,
                  required: true,
                  pattern: /([A-ZÀ-ÿa-z]+)+/,
                })}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <span className="update-page-error">
                  Please enter valid last name
                </span>
              )}
              <label htmlFor="phone">Username</label>
              <input
                className="update-page-form-input"
                type="text"
                defaultValue={userData.userName}
                {...register("userName", {
                  minLength: 3,
                  pattern: /([A-Za-z][-,a-z._0-9']+)+/,
                })}
                placeholder="Enter your Username"
              />
              {errors.userName && (
                <span className="update-page-error">
                  Please enter valid username
                </span>
              )}
              <label htmlFor="phone">Phone Number</label>
              <input
                className="update-page-form-input"
                type="tel"
                defaultValue={userData.phone}
                {...register("phone", {
                  minLength: 10,
                  maxLength: 12,
                  required: true,
                  pattern: "^[0-9]",
                })}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <span className="update-page-error">
                  Enter valid phone number
                </span>
              )}
              <label htmlFor="avater">Avater</label>
              <input
                className="upload-picture"
                type="button"
                value="Update profile picture"
                onClick={updateProfile}
              />
              <Button value="Ayo Soft" type="text" />
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default UpdatePage;
