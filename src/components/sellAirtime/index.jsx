import "./style.scss";
import React,{useState, useEffect} from "react";
import Button from "../common/button";
import Input from "../common/inputField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select"
import copy from "../../assets/icons/copy.svg"
import Swal from "sweetalert2";
import { notifyAdmin } from "../../api";

function SellAirtime() {
  const [ussd, setUssd] = useState("")
  const [network, setNetwork] = useState("")
  const [amountToRecieve, setAmountToRecieve] = useState(0)
  const [designation, setDesignation] = useState("")
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const sellAirtime = yup.object().shape({
    phone: yup.string().max(11).matches(phoneRegExp, 'Phone number is not valid').required("Phone Number is required").typeError("Please enter valid Phone number"),
    amount: yup.number().positive().required().typeError("Please enter your amount"),
    pin: yup.number("Please enter valid numbers").typeError("Please enter your pin").required("Pin is required"),
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(sellAirtime),
  });
let inputs = (watch());

  const handleNetwork = (e) => {
    e && setNetwork(e)
  }

  const lines = {
    MTN: "08130068646",
    Glo: "07051122885",
    Airtel: "081xxxxxxxxx",
    "9mobile": "0809xxxxxxxx"
  }

  useEffect(() => {
    const newAmount = inputs.amount * 0.7;
    setAmountToRecieve(newAmount)
    if (network === "MTN") {
      setUssd(`*600*${lines.MTN}*${inputs.amount}*${inputs.pin}#`)
      setDesignation(lines.MTN)
    }
    if (network === "Glo") {
     setUssd(`*131*${lines.Glo}*${inputs.amount}*${inputs.pin}#`)
     setDesignation(lines.Glo)
    }
    if (network === "Airtel") {
      setUssd(`*432*${lines.Airtel}*${inputs.amount}*${inputs.pin}#`)
      setDesignation(lines.Airtel)
    }
    if (network === "9mobile") {
      setUssd(`*223*${inputs.pin}*${inputs.amount}*${lines["9mobile"]}#`)
      setDesignation(lines["9mobile"])
    }
},[inputs])  

  const handleCopy = () => {
    navigator.clipboard.writeText(ussd).then(() => {
      Swal.fire({
        icon: 'info',
        titleText: 'USSD Copied to Clipboard',
        text: 'After transferring the airtime, click on the "Sent, notify Admin" button below',
        toast: true,
        confirmButtonText: "Okay",
        confirmButtonColor: "#DE3D6D"
        
      })
  });
}


  const onSubmit = async () => { 
    const {phone, amount} = inputs
    const data = { phone, amount, network }
   
   Swal.fire({
    html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="37" cy="50" fill="#de3d6d" r="13">
      <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="37;63;37" begin="-0.5s"></animate>
    </circle>
    <circle cx="63" cy="50" fill="#f5844c" r="13">
      <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="37;63;37" begin="0s"></animate>
    </circle>
    <circle cx="37" cy="50" fill="#de3d6d" r="13">
      <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="37;63;37" begin="-0.5s"></animate>
      <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite"></animate>
    </circle>`,
     text: 'Processing, please wait...',
     background: "#FFFFFF00",
    customClass: {
      confirmButton: "display:none"
    },
    showConfirmButton: false,
    showCancelButton: false
    })
  
    const res = await notifyAdmin(data)
  
     
    
    if (res.status === 201) {
      Swal.fire({
        icon: 'success',
        titleText: 'Notification Sent',
        text: 'Admin has been notified, your wallet would be credited soon',
        confirmButtonText: "Okay",
        confirmButtonColor: "#DE3D6D",
      }) 
    }else{
      Swal.fire({
        icon: 'error',
        titleText: 'Not sent',
        text: res.error,
        confirmButtonText: "Okay",
        confirmButtonColor: "#DE3D6D",
      }) 
    }

     
  };
  const options = [
    { value: "MTN", label: "MTN" },
    { value: "Glo", label: "Glo" },
    { value: "Airtel", label: "Airtel" },
    { value: "9mobile", label: "9mobile" },
  ];
  return (
    <div>
      <p>Transfer Airtime </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form_group">
          <div className="label_container">
            <label htmlFor="network" className="form_label">
              Network
            </label>
          </div>
          <div>
            <Select
              onChange={e=>handleNetwork(e.value)}
              name="network"
              placeholder="Select Network"
              isClearable={true}
              isSearchable={true}
              options={options}
            />
            <span className="form-error">{errors?.message}</span>
          </div>
        </div>

        <div className="form_group">
          <div className="label_container">
            <label htmlFor="phone" className="form_label">
              Phone Number
            </label>
          </div>
          <Input
            register={register}
            errors={errors}
            name="phone"
            type="text"
            placeholder="Phone Number"
          />
        </div>
        <div className="form_group">
          <div className="label_container">
            <label htmlFor="amount" className="form_label">
              Amount to Transfer
            </label>
          </div>
          <Input
            register={register}
            errors={errors}
            name="amount"
            type="text"
            placeholder="NGN"
          />
        </div>
        <div className="form_group">
          <div className="label_container">
            <label htmlFor="amount" className="form_label">
              Transfer Pin
            </label>
          </div>
          <Input
            register={register}
            errors={errors}
            name="pin"
            type="text"
            placeholder="****"
          />
        </div>
        <div className="form_group">
          <div className="label_container">
            <label htmlFor="ussd" className="form_label">
              USSD
            </label>
          </div>
          <div className="inputContainer">
          <Input
            register={register}
            errors={errors}
            isReadOnly = {true}
            name="ussd"
            type="text"
             value={ussd}
            placeholder="*780*amount*09088756433*5000#"
            />
            <span onClick={handleCopy} className="copy"><img src={copy} alt="copy to clipboard" ></img></span>
          </div>
        </div>
        <div className="form_group">
          <div className="label_container">
            <label htmlFor="amount-receive" className="form_label">
              Amount to Receive
            </label>
          </div>
          <Input
            register={register}
            errors={errors}
            isDisabled={true}
            name="amount-receive"
            type="num"
            value={"₦"+ amountToRecieve}
            placeholder="NGN"
          />
        </div>

        <div className="form_group">
          <div className="label_container">
            <label htmlFor="amount-receive" className="form_label">
              Destination Phone Number
            </label>
          </div>
          <Input
            register={register}
            errors={errors}
            isDisabled={true}
            name="designation"
            value={designation}
            type="number"
            placeholder="Destination Phone Number"
          />
        </div>

        <Button value="Sent, Notify Admin" type="submit" />
      </form>
    </div>
  );
}

export default SellAirtime;
