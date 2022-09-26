import { useState, useEffect } from "react";
import "./style.scss";
import Button from "../common/button";
import { getUserAccount } from "../../api";
function ViewAccountDetails() {
  const [account, setAccount] = useState([]);

  useEffect(() => {
    const getAccount = async () => {
      const response = await getUserAccount();
      setAccount(response);
    };
    getAccount();
  }, []);

  const userAccounts = account.response;
  console.log(userAccounts);
  return (
    <div className="mgboardcontainer">
      <div className="mgboardheader">
        <div className="mgbordtitle">
          <h1>Bank Account</h1>
        </div>
        <div className="mgboardsubtitle">
          <a href="/">View Bank accounts</a>
        </div>
      </div>
      {userAccounts && userAccounts.map(account => (

        <div className="veiwAccContainer">
          <div className="veiwAccText">
            <p>{account.bankName}</p>
            <p>{account.accountNumber}</p>
            <p>{account.accountName}</p>
          </div>
          <div className="viewAccBtn">
            <button>Remove</button>
          </div>
        </div>
      ))} 
      

      <Button value="Add New Bank" type="submit" />
    </div>
  );
}
export default ViewAccountDetails;
