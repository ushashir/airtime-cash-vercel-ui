import { useState } from "react";
import TransactionHistory from "../../components/transactionHistory";
import WalletBalance from "../../components/walletBalance";
import { DashboardWrapper, Tab, TopBg, ButtonGroup } from "./dashboardCss";
import Withdraw from "../../components/withdrawBalance";
import SellAirtime from "../../components/sellAirtime/";
import ManageAccount from "../../components/manageAccount/manageAccount";
import Nav from "../../components/nav";
import WithdrawalHistory from "../../components/withdrawalHistory";

function Dashboard() {
  const tabs = [
    "Transfer Airtime",
    "Withdraw balance",
    "Manage Bank Account",
    "Transaction History",
    "Withdrawal History"
  ];
  const [active, setActive] = useState(tabs[0]);

  return (
    <>
      <Nav />
      <DashboardWrapper>
        <TopBg> </TopBg>
        <div className="Dashboard_container">
          {active === tabs[0] || active === tabs[1] ? (
            <WalletBalance />
          ) : (
            <h2 className="Title">{active}</h2>
          )}
          <div>
            <ButtonGroup>
              {tabs.map((tab,index) => (
                <Tab
                  key={tab}
                  active={active === tab}
                  onClick={() => setActive(tab)}
                >
                  <input id={"tab"+index} type="radio" name="tabs" />
                  <label htmlFor={"tab"+index} className="tab">{tab}</label>
                </Tab>
              ))}
            </ButtonGroup>
            <div className="component">
            {active === tabs[0] ? (
              <SellAirtime />
            ) : active === tabs[1] ? (
              <Withdraw />
            ) : active === tabs[2] ? (
              <ManageAccount />
            ) : active === tabs[3]?(
              <TransactionHistory />
            ): 
              <WithdrawalHistory />
          }
              
              </div>
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
}

export default Dashboard;
