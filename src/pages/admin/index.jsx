import { useEffect, useState, Fragment } from "react";
import { allTx, cancelTx, verifyOtp } from "../../api";
import ContentLoader from "react-content-loader";
import "./admin.scss";
import { useRef } from "react";
import AmountModal from "../../components/modal";
import Swal from "sweetalert2";
const Admin = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [isValidOtp, setIsValidOtp] = useState(false);
  const [id, setId] = useState(-1);
  const ref = useRef(null);

  const handleCloseDropdown = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setId(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseDropdown, true);
  });

  useEffect(() => {
    const getTxs = async () => {
      const res = await allTx();
      setTransactions(res.data.response);
      setIsLoading(false);
    };
    getTxs();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
},[otp])
  const handleCancel = async () => {
    let resp;
    Swal.fire({
      title: "Enter your OTP",
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Authorize",
      showLoaderOnConfirm: true,
      preConfirm: (input) => {
          setOtp(input);
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        resp = await verifyOtp(otp);
        console.log(resp, otp);
        if (resp.status === false) {
          Swal.fire({
            icon: "error",
            titleText: "Invalid OTP",
            text: "You are not Authorized to perform this Operation",
            confirmButtonText: "Okay",
            confirmButtonColor: "#DE3D6D",
          });
        } else {
          Swal.fire({
            html: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="37" cy="50" fill="#de3d6d" r="13">
          <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="37;63;37" begin="-0.5s"></animate>
        </circle>
        <circle cx="63" cy="50" fill="#f5844c" r="13">
          <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="37;63;37" begin="0s"></animate>
        </circle>
        <circle cx="37" cy="50" fill="#de3d6d" r="13">
          <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="37;63;37" begin="-0.5s"></animate>
          <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite"></animate>
        </circle>`,
            text: "Processing, please wait...",
            background: "#FFFFFF00",
            customClass: {
              confirmButton: "display:none",
            },
            showConfirmButton: false,
            showCancelButton: false,
          });

          const res = await cancelTx({ txId: id });
          setId(-1);
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              titleText: "Success",
              text: "Transaction cancelled successfully",
              confirmButtonText: "Okay",
              confirmButtonColor: "#DE3D6D",
            });
          } else {
            Swal.fire({
              icon: "error",
              titleText: "Something went wrong",
              text: res.error,
              confirmButtonText: "Okay",
              confirmButtonColor: "#DE3D6D",
            });
          }
        }
      }
    });
  };

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
        <caption>Pending Transactions</caption>

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
            transactions
              .filter((item) => item.status === "pending")
              .map((tx, index) => {
                return (
                  <tr key={index}>
                    <td className="email" data-label="Email">
                      {tx.email}
                    </td>
                    <td className="phone" data-label="Phone Number">
                      {tx.phone}
                    </td>
                    <td className="toSend" data-label="Amount Sent">
                      ₦{tx.amount}
                    </td>
                    <td className="toRecieve" data-label="Amount to Recieve">
                      ₦{tx.amountToReceive}
                    </td>
                    <td className="action" data-label="Actions">
                      <span
                        className="table_actions"
                        onClick={(e) => setId(tx.id)}
                      >
                        ...
                      </span>
                      {
                        id === tx.id && (
                          <Fragment>
                            <div className="dropdownContent">
                              <button
                                onClick={(e) => setShowModal(true)}
                                className="edit"
                              >
                                Edit
                              </button>
                              <button onClick={handleCancel} className="cancel">
                                Cancel
                              </button>
                            </div>
                            {showModal && (
                              <AmountModal
                                data={[tx.email, tx.amount, id]}
                                onChange={closeModal}
                              />
                            )}
                          </Fragment>
                        )

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
