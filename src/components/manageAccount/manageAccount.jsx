import React from "react";
import Button from "../common/button";
import { ManageAccountWrapper } from "./manageAccountCss";
import Input from "../common/inputField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function ManageAccount() {
  const manageAccountSchema = yup.object().shape({
    accountName: yup.string().required('Please enter a valid Account Name'),
    accountNumber: yup.number().min(8).max(13).required('Please enter a valid Account Number'),
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
  const onSubmit = (data) => console.log(data);
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

      <div>
            <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_group">
                    <div className="label_container">
                        <label htmlFor="network" className="form_label">
                            Bank Name
                        </label>
                    </div>
                    <div className="input_container">
                        <select 
                            name="bankName"
                            placeholder="Select Bank"
                        >
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
                </div>

                <div className="form_group">
                    <div className="label_container">
                        <label htmlFor="accountName" className="form_label">
                        Account Name
                        </label>
                    </div>
                    <Input register={register}
                            errors={errors} 
                        name="accountName"
                        type="text"
                        placeholder="Account Name"
                       
                    />
          </div>
          
                <div className="form_group">
                    <div className="label_container">
                        <label htmlFor="amount" className="form_label">
                            Account Number
                        </label>
                    </div>
                    <Input register={register}
                            errors={errors} 
                        name="accountNumber"
                        type="number"
                        placeholder="accountNumber"
                      
                    />
                </div>
                <Button value="Add Bank" type="submit" />
            </form>
        </div>
    </ManageAccountWrapper>
  );
}

export default ManageAccount;
