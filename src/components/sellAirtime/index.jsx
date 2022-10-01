import "./style.scss";
import React from "react";
import Button from "../common/button";
import Input from "../common/inputField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select"
import copy from "../../assets/icons/copy.svg"
import { useState } from "react";

function SellAirtime() {
  const [select, setSelect] = useState("")
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const sellAirtime = yup.object().shape({
     phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    amount: yup.number().positive().required().typeError("Please enter your amount"),
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(sellAirtime),
  });
  watch();

  const handleSelectChange = (selectedOption) => {
    setSelect({ network: selectedOption.value });
  };

  const onSubmit = (data) => console.log(data);
  const options = [
    { value: "MTN", label: "MTN" },
    { value: "Glo", label: "Glo" },
    { value: "Airtel", label: "Airtel" },
    { value: "9mobile", label: "9mobile" },
  ];
  return (
    <div>
      <p>Sell Airtime </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form_group">
          <div className="label_container">
            <label htmlFor="network" className="form_label">
              Network
            </label>
          </div>
          <div>
            <Select
              onChange={handleSelectChange}
              name="network"
              placeholder="Select Network"
              isClearable={true}
              isSearchable={true}
              options={options}
            />
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
            <label htmlFor="ussd" className="form_label">
              USSD
            </label>
          </div>
          <div className="inputContainer">
          <Input
            register={register}
            errors={errors}
            // isDisabled={true}
            isReadOnly = {true}
            name="ussd"
            type="text"
            value="*780*amount*09088756433*pin#"
            // placeholder="*780*amount*09088756433*5000#"
            />
            <span className="copy"><img src={copy} alt="copy to clipboard" ></img></span>
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
            name="amount-receive"
            type="num"
            placeholder="Destination Phone Number"
          />
        </div>

        <Button value="Sell Airtime" type="submit" />
      </form>
    </div>
  );
}

export default SellAirtime;
