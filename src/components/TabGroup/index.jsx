import React, { useState } from 'react';
import styled from 'styled-components';
const Tab = styled.button`
  font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #012A4A;


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
  return (
    <>
      <ButtonGroup>
        {types.map(type => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <p> Your payment selection: {active} </p>
    </>
  );
}
// Usage
export default TabGroup