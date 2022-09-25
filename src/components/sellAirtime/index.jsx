import "./style.scss";
import React from "react";
import Button from "../common/button";
import Input from "../common/inputField";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

function SellAirtime() {
    const sellAirtime = yup.object().shape({
        phone: yup.number().required(),
        amount: yup.number().min(6).max(32).required(),
      });
    const { register, watch, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(sellAirtime)
    });
    watch()
    const onSubmit = data => console.log(data);

    return (
        <div>
            <p>Sell Airtime </p>
            <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_group">
                    <div className="label_container">
                        <label htmlFor="network" className="form_label">
                            Network
                        </label>
                    </div>
                    <div className="input_container">
                        <select 
                            name="network"
                            id="network"
                            className="network"
                            placeholder="Select Network"
                        >
                           <option value="">Network</option>
                            <option value="">MTN</option>
                            <option value="">Glo</option>
                            <option value="">9mobile</option>
                            <option value="">Airtel</option>
                        </select>
                    </div>
                </div>

                <div className="form_group">
                    <div className="label_container">
                        <label htmlFor="phone" className="form_label">
                            Phone Number
                        </label>
                    </div>
                    <Input register={register}
                            errors={errors} 
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                       
                    />
                </div>
                <div className="form_group">
                    <div className="label_container">
                        <label htmlFor="amount" className="form_label">
                            Amount to Sell
                        </label>
                    </div>
                    <Input register={register}
                            errors={errors} 
                        name="amount"
                        type="number"
                        placeholder="NGN"
                      
                    />
                </div>
                <div className="form_group">
                    <div className="label_container">
                        <label htmlFor="ussd" className="form_label">
                            USSD
                        </label>
                    </div>
                    <Input
                        register={register}
                            errors={errors}
                            isDisabled={true} 
                        name="ussd"
                        type="text"
                        placeholder="*780*amount*09088756433*5000#"
                    />
                </div>
                <div className="form_group">
                    <div className="label_container">
                        <label htmlFor="amount-receive" className="form_label">
                            Amount to Receive
                        </label>
                    </div>
                    <Input register={register}
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
                    <Input register={register}
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
