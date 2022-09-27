import React, {useState} from "react";
import Button from "../common/button";
import { ManageAccountWrapper } from "./manageAccountCss";
import Input from "../common/inputField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select"
import ViewAccountDetails from "../veiwAccount";
import BankAccountModal from "../dashboardModal";

function ManageAccount() {

  const [modal, setModal] = useState(false)
  const [show, setShow] = useState(true)

  const handleRender = () => {
    setShow(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const closeModal2 = () => {
    if (modal === true) {
      setModal(false)
    }
  }


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

  const options = [
    { value: 'GT Bank', label: 'GT Bank' },
    { value: 'First Bank', label: 'First Bank' },
    { value: 'Union Bank', label: 'Union Bank' },
    { value: 'UnityBank', label: 'UnityBank' },
    { value: 'Citibank', label: 'Citibank' },
    { value: 'Access Bank', label: 'Access Bank' },
    { value: 'Wema Bank', label: 'Wema Bank' },
  ].sort()


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
                  <label htmlFor="network" className="form_label">
                    Bank Name
                  </label>
                </div>
                <div>
                  <Select
                    name="bankName"
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
                  type="number"
                  placeholder="accountNumber"
                />
              </div>
              <div
                onClick={() => {
                  setModal(true);
                }}
              >
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
