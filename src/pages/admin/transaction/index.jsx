import { useEffect, useState } from "react";
import { allTx } from "../../../api";
import ContentLoader from "react-content-loader";
import "../admin.scss";
import Timeago from "react-timeago"

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTxs = async () => {
      const res = await allTx();
      setTransactions(res.data.response);
      setIsLoading(false);
    };
    getTxs();
  }, []);
  console.log(transactions);




  const MyLoader = () => (
    <ContentLoader
      viewBox="0 0 400 160"
      height={160}
      width={320}
      backgroundColor="transparent"
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  );
  return (
    <>
      <table>
        <caption>Transactions History</caption>

        {isLoading && <MyLoader style={{ margin: "0 auto" }} />}

        <thead>
          <tr>
            <th scope="col">Phone Number</th>
            <th scope="col">Amount Sent</th>
            <th scope="col">Date</th>
            <th scope="col">Network</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.filter(tx=>tx.status !== "pending").map(tx => {
              return (
                <tr>
                  <td className="phone" data-label="Phone Number">{tx.phone}</td>
                  <td className="toSend" data-label="Amount Sent">{tx.amount}</td>
                  <td className="date" data-label="Date"><Timeago date={tx.createdAt} /></td>
                  <td className="network" data-label="Network">{tx.network}</td>
                  <td className="status" data-label="Status">{tx.status}</td>
                </tr>
              );
            })}
        </tbody>
          </table>
         
    </>
  );
};

export default Transactions;
