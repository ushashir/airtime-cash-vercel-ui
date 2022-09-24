import React, { useState } from 'react';
import Input from '../../components/common/inputField';
import Nav from '../../components/nav'
import TransactionHistory from '../../components/transactionHistory';
import Wallet_balance from '../../components/wallet_balance';
import {Dashboard_wrapper,Tab, TopBg, ButtonGroup,} from "./dashboardCss"
import ManageAccount from '../../components/manageAccount/manageAccount';



function Dashboard() {
    const tabs = [
        "Sell Airtime",
        "Withdraw balance",
        "Manage Bank Account",
        "Transaction History",
    ];
    const [active, setActive] = useState(tabs[0]);



    return (
        <Dashboard_wrapper>
            <TopBg> </TopBg>
            <div className="Dashboard_container">
                {(active === tabs[0] || active === tabs[1]) ?
                    <Wallet_balance /> : <h2 className="Title">{active}</h2>
                }
                <div>

                <ButtonGroup>
        {tabs.map((tab) => (
          <Tab key={tab} active={active === tab} onClick={() => setActive(tab)}>
            {tab}
          </Tab>
        ))}
      </ButtonGroup>
      {active === tabs[0]
        ? "sell airtime component"
        : active === tabs[1]
        ? "Withdraw balance component"
        : active === tabs[2]
        ? <ManageAccount/>
        : <TransactionHistory/>}
                  
                </div>
            </div>
        </Dashboard_wrapper>
    );
}

export default Dashboard;