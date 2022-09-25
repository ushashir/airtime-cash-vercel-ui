import "./style.scss";
import React, { useState } from "react";
import Button from "../common/button";
import Input from "../common/inputField";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

function Withdraw() {
    const withdrawSchema = yup.object().shape({
        amount: yup.number().required(),
        password: yup.string().min(6).max(32).required(),
      });
    const { register, watch, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(withdrawSchema)
    });
    watch()
    const onSubmit = data => console.log(data);

    return (
        <div>
            <p>Withdraw </p>
            <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_group">
                    <div className="label_container">
                        <label htmlFor="selectAccount" className="form_label">
                            Select Account
                        </label>
                    </div>
                    <div className="input_container">
                        <select 
                            register={register}
                            errors={errors} 
                            name="bank_account"
                            id="selectAccount"
                            className="selectAccount"
                            placeholder="select"
                        >
                            <option>Select</option>
                            <option>UBA(00011122233444)</option>
                            <option>STERLING(00011122233444)</option>
                            <option>GTB(00011122233444)</option>
                            <option>FCMB(00011122233444)</option>
                            <option>FIDELITY(00011122233444)</option>
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
                        name="account_name"
                        isDisabled={true}
                        type="text"
                        placeholder="Ushahemba"
                        value="Senior man"
                    />
                </div>
                <div className="form_group">
                    <div className="label_container">
                        <label htmlFor="accountNumber" className="form_label">
                            Account Number
                        </label>
                    </div>
                    <Input register={register}
                            errors={errors} 
                        name="account_num"
                        isDisabled={true}
                        type="text"
                        placeholder="12366325875"
                        value="12345678909"
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
                    <Input register={register}
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

export default Withdraw;
