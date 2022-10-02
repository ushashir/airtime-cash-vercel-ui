import { useState, useEffect } from "react";
import "./style.scss";
import { getUserAccount, deleteAccount } from "../../api";
// import axios from "axios";
function ViewAccountDetails({ children, handleRender }) {
  const [watchChanges, setWatchChanges] = useState(true);
  const [account, setAccount] = useState([]);

   const getAccount = async () => {
     const response = await getUserAccount();
     setAccount(response.response);
   };
   
  useEffect(() => {
    getAccount();
  }, [watchChanges]);

  const handleDelete = async (id) => {
    const res = await deleteAccount(id);
    setWatchChanges(!watchChanges);

    console.log(res);
  };

  // const userAccounts = account.response;
  // console.log(userAccounts);
  return (
    <div className="mgboardcontainer">
      {/* <div><img src=""/></div> */}
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
