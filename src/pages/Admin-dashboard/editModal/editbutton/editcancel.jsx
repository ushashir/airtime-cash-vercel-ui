import React from "react";
import { useRecoilState } from "recoil";
import {
  editModalState,
  minModalState,
} from "../../../../atoms/successModalAtom";
import Edit from "../edit";
import {EditCancelStyle}  from "./editcancelStyle";

const Editcancel = () => {
  const [ShowModal, setShowModal] = useRecoilState(minModalState);
  const [EditModal, setEditModal] = useRecoilState(editModalState);
  return (
    <EditCancelStyle>
      <ul>
        <li
          className="green"
          onClick={(e) => {
            e.preventDefault();
            setEditModal(true);
          }}
        >
          Edit
        </li>
        <li
          className="orange"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(false);
          }}
        >
          Cancel
        </li>
      </ul>
      {EditModal && <Edit />}
    </EditCancelStyle>
  );
};

export default Editcancel;
