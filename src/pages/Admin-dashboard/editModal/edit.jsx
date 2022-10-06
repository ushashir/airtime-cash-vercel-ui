import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { MaxEditFormState } from "../../../atoms/bankFormAtom";
import { minModalState }  from "../../../atoms/successModalAtom";
// import {Transactions} from "../transactions/transaction";
import {EditStyle} from "./editstyle";

const Edit = () => {
    
  const [EditformState, setEditFormState] = useRecoilState(MaxEditFormState);
  const [ShowModal, setShowModal] = useRecoilState(minModalState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      e.stopPropagation();
      navigate("/admin/transactions");
      setEditFormState(false);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <EditStyle>
      <div className="mymodal">
        <div className="acctsuccess">
          <p className="sucestext">Enter an amount</p>
        </div>
        <form>
          <label htmlFor="amount-sent" className="texts">
            Amount Sent
          </label>
          <input
            type="text"
            id="amount-sent"
            placeholder=""
            name="AmountSent"
          />

          <label htmlFor="" className="texts">
            Amount Recieve
          </label>
          <input
            type="text"
            id="amount-receive"
            placeholder=""
            name="AmountRecieve"
            disabled
          />

          <button type="submit" className="btnnn" onClick={handleSubmit}>
            Confirm
          </button>
        </form>
      </div>
    </EditStyle>
  );
};

export default Edit;
