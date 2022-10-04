import "./style.scss";
import React from "react";
import Button from "../common/button";
import Input from "../common/inputField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { checkWalletBalance, payment, sendTransactionStatus } from "../../api";
import { useState, useContext } from "react";
import { bankCodes } from "../../utils/data/bankcodes";
import { BankContext } from "../../context/userContext";
import Swal from "sweetalert2";

function Withdraw() {
    const [bankDetails, setBankDetails] = useState("");
    const [clicked, setClicked] = useState(false);
    const { setUpdateWallet } = useContext(BankContext);

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
    const onSubmit = async (data, e) => {
        e.preventDefault();
        setClicked(false)
        let bankCode;
        const bankName = bankDetails.split("(")[0];
        bankCodes.map((bank) => {
            if (bankName === bank.name) {
                bankCode = bank.code;
            }
        });
        const formData = { bankCode, bankName, ...data };
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

        const res = await checkWalletBalance(formData);

        let flutterStatus;
        if (res.message === "Success") {
            const result = await payment(formData);
            console.log('resss',)
            const status = result.data.response.data.status;
            if (status === "FAILED") {
                flutterStatus = "failed";
                Swal.fire({
                    icon: 'success',
                    titleText: 'error',
                    text: 'Transaction failed',
                    confirmButtonText: "Okay",
                    confirmButtonColor: "#DE3D6D",
                })
                setClicked(false)
            } else {
                flutterStatus = "successful";
                Swal.fire({
                    icon: 'success',
                    titleText: 'Transfer Successful',
                    text: 'Your funds have been sent',
                    confirmButtonText: "Okay",
                    confirmButtonColor: "#DE3D6D",
                })
            }
        }
        const returned = await sendTransactionStatus(formData, flutterStatus);
        setUpdateWallet(prev => !prev);
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
                            name="bankAccount"
                            placeholder="Select Account"
                            className="selectAccount"
                            isClearable={true}
                            isSearchable={true}
                            options={options}
                            onChange={(choice) => setBankDetails(choice.value)}
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
                        type="text"
                        placeholder="Account Name"

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
                        value="1234567890"
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
                <Button value="Withdraw" type="submit" disabled={false} />
            </form>
        </div>
    );
}
export default Withdraw;
