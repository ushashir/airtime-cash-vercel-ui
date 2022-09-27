import React from "react";
import successIcon from "../../assets/icons/successIcon.png";
import "./BankAccountModal.css";
const BankAccountModal = ({ closeModal }) => {
  return (
    <div className="modal_overlay" onClick={closeModal}>
      <div className="modal_content">
        <div className="icon_container">
          <img src={successIcon} alt="success logo"></img>
        </div>
        <h3 className="success_header">Bank Account Successful</h3>
        <p className="success_details">
          Your bank account has been added successfully
        </p>
        <div className="btn_container">
          <button className="done_btn" onClick={closeModal}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
export default BankAccountModal;
