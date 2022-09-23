import React, { useState } from 'react';
import styled from 'styled-components';
import TransactionHistory from '../transactionHistory';
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
const types = ['Sell Airtime', 'Withdraw balance', 'Manage Bank Account', 'Transaction History'];

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  const [isActive, setIsActive] = useState({
    sellAirtime: true,
    withdrawBalance: false,
    manageBankAccount: false,
    transactonHistory: false
  });


  return (
    <>
      <ButtonGroup>
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
    </>
  );
}
export default TabGroup;
