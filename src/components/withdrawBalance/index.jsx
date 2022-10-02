import "./style.scss";
import React from "react";
import Button from "../common/button";
import Input from "../common/inputField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { useState } from "react";
import { checkWalletBalance, sendTransactionStatus, payment } from "../../api";

export default function Withdraw() {
  const [select, setSelect] = useState("");
  const withdrawSchema = yup.object().shape({
    amount: yup
      .number()
      .positive()
      .required("Please enter a valid Amount")
      .typeError("Please enter valid number"),
    password: yup
      .string()
      .min(6)
      .max(32)
      .required("Please enter a strong password"),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(withdrawSchema),
  });
  watch();

  //form handling logic here
  const onSubmit = async (data) => {
    const { amount } = data;
    // const res = await checkWalletBalance(amount);
    // let flutter = 'successful'

    //do the fluterwave
    // const res = await payment(data)
    console.log(res);

    // axios.post("https://api.flutterwave.com/v3/transfers", {
    //     name: "John Doe",
    //   })
    //   .then(function (response) {
    //     return response;
    //   })
    //   .catch(function (error) {
    //     return error;
    //   });
  };

  const options = [
    { value: "UBA(00011xxxxxxxx)", label: "UBA(000111xxxxxxxx)" },
    { value: "GT Bank(00011122xxxxxx)", label: "GT Bank(0001112xxxxxx)" },
  ];
  return (
    <div>
      <p>Withdraw </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form_group">
          <div className="label_container">
            <label htmlFor="selectAccount" className="form_label">
              Select Account
            </label>
          </div>
          <div>
            <Select
              // onChange={handleSelectChange}
              name="bankAccount"
              placeholder="Select Account"
              className="selectAccount"
              isClearable={true}
              isSearchable={true}
              options={options}
            />
          </div>
        </div>

        <div className="form_group">
          <div className="label_container">
            <label htmlFor="accountName" className="form_label">
              Account Name
            </label>
          </div>
          <Input
            register={register}
            errors={errors}
            name="accountName"
            isReadOnly={true}
            type="text"
            value="Ushahemba"
          />
        </div>
        <div className="form_group">
          <div className="label_container">
            <label htmlFor="accountNumber" className="form_label">
              Account Number
            </label>
          </div>
          <Input
            register={register}
            errors={errors}
            name="accountNumber"
            readOnly={true}
            type="text"
            value="12366325875"
          />
        </div>
        <div className="form_group">
          <div className="label_container">
            <label htmlFor="amount" className="form_label">
              Amount
            </label>
          </div>
          <Input
            register={register}
            errors={errors}
            name="amount"
            type="number"
            placeholder="NGN"
          />
        </div>
        <div className="form_group">
          <div className="label_container">
            <label htmlFor="password" className="form_label">
              Password
            </label>
          </div>
          <Input
            register={register}
            errors={errors}
            name="password"
            type="password"
            placeholder="enter password"
          />
        </div>

        <Button value="Withdaw" type="submit" />
      </form>
    </div>
  );
}
