import React, { useEffect, useState } from "react";
import Button from "../common/button";
import { ManageAccountWrapper } from "./manageAccountCss";
import Input from "../common/inputField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { banksList, createAccount } from "../../api";
import ViewAccountDetails from "../veiwAccount";
import BankAccountModal from "../dashboardModal";
import Swal from "sweetalert2";

function ManageAccount() {
  const [banks, setBanks] = useState([]);
  const [show, setShow] = useState(true);
  const [modal, setModal] = useState(false);

  const handleRender = () => {
    setShow(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const closeModal2 = () => {
    if (modal === true) {
      setModal(false);
    }
  };

  const accountNumberRegex = /^(\d{10})$/;
  const manageAccountSchema = yup.object().shape({
    accountName: yup
      .string("Please enter a valid Account name")
      .required("Please enter your account name")
      .min(6, "Please enter valid account name"),
    accountNumber: yup
      .string()
      .required("Please enter your account number")
      .matches(
        accountNumberRegex,
        "Account number must be 10 characters"
      ),
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



  //handle form logic here

  const onSubmit = async (data, bank) => {
    const bankName = bank.target[1].value;
    const formData = { bankName, ...data };
    const res = await createAccount(formData);

    if ((res.Error)) {
      Swal.fire(res.Error)
    }
    if ((res.data.message = "Success")) {
      setModal(true);
    }
  };

  useEffect(() => {
    const getBanks = async () => {
      const response = await banksList();
      setBanks(response.data);
    };
    getBanks();
  }, []);

  const options = [];
  banks.map((bank) => {
    options.push({ value: bank.name, label: bank.name });
  });
  return (
    <div onClick={closeModal2}>
      {show && (
        <ManageAccountWrapper>
          <div className="top">
            <div>
              <p className="acc">Bank Account</p>
            </div>
            <div
              onClick={() => {
                setShow(false);
              }}
            >
              <p className="view">View Bank Accounts</p>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form_group">
                <div className="label_container">
                  <label htmlFor="bankName" className="form_label">
                    Bank Name
                  </label>
                </div>
                <div>
                  <Select
                    name="bankName"
                    placeholder="Select Bank"
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
                <Input
                  register={register}
                  errors={errors}
                  name="accountNumber"
                  type="text"
                  placeholder="accountNumber"
                />
              </div>
              <div>
                <Button value="Add Bank" type="submit" />
              </div>
            </form>
            {modal && (
              <div>
                <BankAccountModal closeModal={closeModal} />
              </div>
            )}
          </div>
        </ManageAccountWrapper>
      )}

      {!show && (
        <ViewAccountDetails handleRender={handleRender}>
          <div
            onClick={() => {
              setShow(true);
            }}
          >
            <Button value="Add New Bank" type="submit" />
          </div>
        </ViewAccountDetails>
      )}
    </div>
  );
}

export default ManageAccount;
