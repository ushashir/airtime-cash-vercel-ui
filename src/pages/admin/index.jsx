import { useEffect, useState, Fragment } from "react";
import { allTx } from "../../api";
import ContentLoader from "react-content-loader";
import "./admin.scss";
import { useRef } from "react";
import AmountModal from "../../components/modal";
const Admin = () => {
  const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false)
    const [id, setId] = useState(-1)
    const ref = useRef(null)
 
    const handleCloseDropdown = (e) => {
        if(ref.current && !ref.current.contains(e.target)){
            setId(-1)
        }
    }
    useEffect(() => {
        document.addEventListener("click", handleCloseDropdown, true)
    })

  useEffect(() => {
    const getTxs = async () => {
      const res = await allTx();
      setTransactions(res.data.response);
      setIsLoading(false);
    };
    getTxs();
  }, []);
  console.log(transactions);

//     const toggleModal = () => {
//         console.log("ffff")
//         setId(-1)
//         setShowModal(true)
// }
  const closeModal = () => {
    setShowModal(false)
  }

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
        <caption>Admin Dashboard</caption>

        {isLoading && <MyLoader style={{ margin: "0 auto" }} />}

        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Amount Sent</th>
            <th scope="col">Amount to Recieve</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((tx) => {
              return (
                <tr>
                  <td data-label="Email">{tx.email}</td>
                  <td data-label="Phone Number">{tx.phone}</td>
                  <td data-label="Amount Sent">{tx.amount}</td>
                  <td data-label="Amount to Recieve">{tx.amountToReceive}</td>
                  <td data-label="Actions">
                        <span className="table_actions" onClick={e=>setId(tx.id)}>...</span>
                          {id === tx.id &&
                              <Fragment>
                              <div  className="dropdownContent">
                              <button onClick={e=> setShowModal(true)} className="edit">Edit</button>
                              <button onClick={e=>setId(-1)} className="cancel">Cancel</button>
                              </div>
                        {showModal && <AmountModal data={[tx.email, tx.amount]} onChange={closeModal} />}
                              </Fragment>
                             
                                //   <Dropdown data={tx} setId={setId} />
                            
                              }
                  </td>
                </tr>
              );
            })}
        </tbody>
          </table>
         
    </>
  );
};

export default Admin;
