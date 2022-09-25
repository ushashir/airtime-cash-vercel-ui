import React from "react";
import Button from "../common/button";
import { ManageAccountWrapper } from "./manageAccountCss";
import Input from "../common/inputField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function ManageAccount() {
  const manageAccountSchema = yup.object().shape({
    accountName: yup.string().required(),
    accountNumber: yup.number().required(),
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(manageAccountSchema),
  });
  watch();
  const onSubmit = (data) => {
    console.log("data");
    console.log(data)};
  return (
    <ManageAccountWrapper>
      <div className="top">
        <div>
          <p className="acc">Bank Account</p>
        </div>
        <div>
          <p className="view">View Bank Accounts</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Bank Name</label>
          <br />
          <select type="text"  placeholder="Bank Name">
            <option> Select Bank</option>
            <option>GT Bank</option>
            <option>First Bank</option>
            <option>Union Bank</option>
            <option>UnityBank</option>
            <option>Citibank</option>
            <option>Access Bank</option>
            <option>Wema Bank</option>
            <option>Stanbic IBTC Bank</option>
            <option>Standard Chartered Bank</option>
            <option>Keystone Bank</option>
            <option>Jaiz Bank</option>
            <option>FCMB</option>
            <option>Providus Bank</option>
            <option>Skye Bank</option>
            <option>Parallex Bank</option>
            <option>Fidelity Bank</option>
            <option>Ecobank</option>
            <option>UBA</option>
            <option>Zenith Bank</option>
            <option>Sterling Bank</option>
            <option>First City Monument Bank</option>
            <option>United Bank for Africa</option>
            <option>Heritage Bank</option>
            <option>Keystone Bank</option>
          </select>
        </div>
        <div>
          <label className="labNm">Account Name</label>
      
          <Input
          register={register}
          errors={errors}
          name="accountName"
            type="text"
           placeholder="Account Name" />
        </div>
        <div>
          <label className="labNm">Account Number</label>
       
          <Input
            register={register}
            errors={errors}
            name="accountNumber"
            type="number"
            placeholder="Account Number"
          />
        </div>
      </form>
      <Button value="Add Bank" type="submit" />
    </ManageAccountWrapper>
  );
}

export default ManageAccount;
