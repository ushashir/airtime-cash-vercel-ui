import { useState, useEffect} from "react";
import "./style.scss";
import { getUserAccount } from "../../api";
function ViewAccountDetails({children, handleRender}) {
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
        <div className="mgboardsubtitle" onClick={handleRender}>
          <p>Manage Bank accounts</p>
        </div>
      </div>
      {userAccounts &&
        userAccounts.map((account) => (
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

      {children}
    </div>
  );
}
export default ViewAccountDetails;
