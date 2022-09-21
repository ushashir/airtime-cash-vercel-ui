import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { verify } from "../../api";


const EmailVerified = () => {
  const { token } = useParams()
  const [isVerified, setIsVerified] = useState(false)
  const navigate = useNavigate();

  const verifyUser = async () => {
    const res = await verify(token);
    // console.log(res.status)
      if(res.status === 200) setIsVerified(true) 
    console.log("xxxxx",isVerified)
  }
  useEffect(() => {
  verifyUser()
 },[])
  
  return (
  isVerified? Swal.fire(
    'Success',
    `Email verified`,
    'success' 
    )
      :
      Swal.fire(
        'Oops',
        "Something went wrong, try again",
        'error',
      )

)
};

export default EmailVerified;
