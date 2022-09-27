import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { verify } from "../../api";


const EmailVerified = () => {
  const { token } = useParams()
  const [isVerified, setIsVerified] = useState(false)
  const navigate = useNavigate();

  const verifyUser = async (token) => {
    const res = await verify(token);
    console.log(res)
    if (res.status === 200) setIsVerified(true)
    setTimeout(() => {
    navigate("/login")
 }, 2000)
   
  }
  useEffect(() => {
    verifyUser(token)
  }, [])

  return (
    isVerified && Swal.fire(
      'Success',
      `Email verified`,
      'success'
    )

  )
};

export default EmailVerified;
