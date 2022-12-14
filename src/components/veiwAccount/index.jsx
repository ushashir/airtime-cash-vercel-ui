import { useState, useEffect } from "react";
import "./style.scss";
import { getUserAccount, deleteAccount, getUserData } from "../../api";
import Swal from "sweetalert2";
// import axios from "axios";
function ViewAccountDetails({ children, handleRender }) {
  const [watchChanges, setWatchChanges] = useState(true);
  const [account, setAccount] = useState([]);
  const [password, setPassword] = useState("");

  const getAccount = async () => {
    const response = await getUserAccount();
    setAccount(response.response);
  };

  useEffect(() => {
    getAccount();
  }, [watchChanges]);

  const handleDelete = async (id) => {
    let res;
    Swal.fire({
      title: "Are you sure you want to remove account?",
      showCancelButton: true,
      confirmButtonText: "Remove",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          res = await deleteAccount(id);
        } catch (error) {
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    })
    .then((result) => {
      if (result.isConfirmed) {
        deleteAccount(id, password)
        .then(res=>console.log(res))
        setWatchChanges(!watchChanges);
        // Swal.fire(res.message);
      }
    });
  };

  return (
    <div className="mgboardcontainer">
      <div className="mgboardheader">
        <div className="mgbordtitle">
          <h1>Bank Account</h1>
        </div>
        <div className="mgboardsubtitle" onClick={handleRender}>
          <p>Manage Bank accounts</p>
        </div>
      </div>
      {account &&
        account.map((account) => (
          <div className="veiwAccContainer" key={account.id}>
            <div className="veiwAccText">
              <p>{account.bankName}</p>
              <p>{account.accountNumber}</p>
              <p>{account.accountName}</p>
            </div>
            <div className="viewAccBtn">
              <button onClick={() => handleDelete(account.id)}>Remove</button>
            </div>
          </div>
        ))}

      {children}
    </div>
  );
}
export default ViewAccountDetails;
