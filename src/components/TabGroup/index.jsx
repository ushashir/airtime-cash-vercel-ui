import React, { useState } from "react";
import styled from "styled-components";

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
const tabs = [
  "Sell Airtime",
  "Withdraw balance",
  "Manage Bank Account",
  "Transaction History",
];

function TabGroup() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <>
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
        ? "Manage Bank Account component"
        : "Transaction History"}
    </>
  );
}
export default TabGroup;
