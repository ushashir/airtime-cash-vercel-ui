import React from "react";
import successIcon from "../../assets/icons/successIcon.png";
import "./style.scss";
const BankAccountModal = ({ closeModal }) => {
  return (
    <div className="modal_overlay">
      <div className="modal_content">
        <div className="icon_container">
          <img src={successIcon} alt="success logo"></img>
        </div>
        <div className="success_text">
          <h3 className="success_title">Bank Account Successful</h3>
          <p className="success_subtitle">
            Your bank account has been added successfully
          </p>
        </div>
        <div className="btn_container" onClick={closeModal}>
          <p className="done_btn">Done</p>
        </div>
      </div>
    </div>
  );
};
export default BankAccountModal;
