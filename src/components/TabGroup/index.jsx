<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";

=======
import React, { useState } from 'react';
import styled from 'styled-components';
import TransactionHistory from '../transactionHistory';
>>>>>>> 87d16ce42a5536c4173439c27fd09bdc9411cbdf
const Tab = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #012a4a;

  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 1px solid #DE3D6D;
   
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 34px auto;
`;
<<<<<<< HEAD
const tabs = [
  "Sell Airtime",
  "Withdraw balance",
  "Manage Bank Account",
  "Transaction History",
];

function TabGroup() {
  const [active, setActive] = useState(tabs[0]);
=======
const types = ['Sell Airtime', 'Withdraw balance', 'Manage Bank Account', 'Transaction History'];

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  const [isActive, setIsActive] = useState({
    sellAirtime: true,
    withdrawBalance: false,
    manageBankAccount: false,
    transactonHistory: false
  });

>>>>>>> 87d16ce42a5536c4173439c27fd09bdc9411cbdf

  return (
    <>
      <ButtonGroup>
<<<<<<< HEAD
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
        ? "Manage Bank Account component"
        : "Transaction History"}
=======
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => {
              setActive(type)
              type === 'Sell Airtime' ? setIsActive({ ...isActive, sellAirtime: true }) : setIsActive({ ...isActive, sellAirtime: false })
              type === 'Withdraw balance' ? setIsActive({ ...isActive, withdrawBalance: true }) : setIsActive({ ...isActive, withdrawBalance: false })
              type === 'Manage Bank Account' ? setIsActive({ ...isActive, manageBankAccount: true }) : setIsActive({ ...isActive, manageBankAccount: false })
              type === 'Transaction History' ? setIsActive({ ...isActive, transactonHistory: true }) : setIsActive({ ...isActive, transactonHistory: false })
            }}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <p> Your payment selection: {active} </p>
      {isActive.transactonHistory && <TransactionHistory />}
>>>>>>> 87d16ce42a5536c4173439c27fd09bdc9411cbdf
    </>
  );
}
export default TabGroup;
