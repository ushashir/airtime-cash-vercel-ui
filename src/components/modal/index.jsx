import Input from "../common/inputField"
import "./modal.scss"
import { useForm } from "react-hook-form";
import Button from "../common/button";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addToWallet } from "../../api";
import Swal from "sweetalert2";

const AmountModal = (data) => {
    const record = data.data
    const email = record[0]

    const amountSchema = yup.object().shape({
        amount: yup.number().positive().required().typeError("Please enter your amount"),
    })
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(amountSchema),
      });
   let input =  watch()
    
    const onSubmit = async () => {
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
        const payload = ({ ...input, email })
        console.log(payload)
        const res = await addToWallet(payload)
        console.log(res)
        if (res.status === 200) {
            Swal.fire({
              icon: 'success',
              titleText: 'User Wallet credited',
              text: 'You have successfully credited the user',
              confirmButtonText: "Okay",
              confirmButtonColor: "#DE3D6D",
            })
          } else {
            Swal.fire({
              icon: 'error',
              titleText: 'Not sent',
              text: res.error,
              confirmButtonText: "Okay",
              confirmButtonColor: "#DE3D6D",
            })
          }

    }

    return (
        <>
            <div className="modalWrapper">
            <div className="modalContainer">
                    <h2 className="modalTitle">Confirm Amount</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form_group">
          <div className="label_container">
            <label htmlFor="amount" className="form_label">
              Amount sent
            </label>
          </div>
          
          <Input
            register={register}
            errors={errors}
            name="amount"
            type="text"
            placeholder="Enter amount"
          />
        </div>
                    <div className="form_group">
          <div className="label_container">
            <label htmlFor="amount_recieved" className="form_label">
              Amount recieved
            </label>
          </div>
          <Input
            register={register}
                            errors={errors}
                            isDisabled={true}
            name="amount_recieved"
                            type="text"
                            value={record[1] * 0.7}
            placeholder="Enter amount"
          />
                    </div>
                    <div style={{margin:"0 auto"}}>
                    <Button type="submit" value="Confirm" style={{marginBottom: "33px"}}/>
                    </div>
                    </form>
        </div>
        </div>
           
        </>
    )
}

export default AmountModal