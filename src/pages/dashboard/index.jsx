import { useState } from 'react';
import TransactionHistory from '../../components/transactionHistory';
import WalletBalance from '../../components/walletBalance';
import { DashboardWrapper, Tab, TopBg, ButtonGroup, } from "./dashboardCss"
import Withdraw from '../../components/withdrawBalance';
import SellAirtime from '../../components/sellAirtime/';



function Dashboard() {
    const tabs = [
        "Sell Airtime",
        "Withdraw balance",
        "Manage Bank Account",
        "Transaction History",
    ];
    const [active, setActive] = useState(tabs[0]);

    return (
        <DashboardWrapper>
            <TopBg> </TopBg>
            <div className="Dashboard_container">
                {(active === tabs[0] || active === tabs[1]) ?
                    <WalletBalance /> : <h2 className="Title">{active}</h2>
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
                        ? <SellAirtime />
                        : active === tabs[1]
                            ? <Withdraw />
                            : active === tabs[2]
                                ? "manage bank"
                                : <TransactionHistory />}
                </div>
            </div>
        </DashboardWrapper>
    );
}

export default Dashboard;
