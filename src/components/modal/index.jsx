import Input from "../common/inputField"
import "./modal.scss"
import { useForm } from "react-hook-form";
import Button from "../common/button";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addToWallet } from "../../api";

const AmountModal = (data) => {
    const [payload, setPayload] = useState({})
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
        const payload = ({ ...input, email })
        const res = await addToWallet(payload)
        console.log(res)

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