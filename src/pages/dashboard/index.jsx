import React from 'react';
import Nav from '../../components/nav'
import "./style.scss"
import styledComponents from 'styled-components';
import TabGroup from '../../components/TabGroup';



function Dashboard(props) {
//css
    const Div = styledComponents.div`
        display:flex;
        flex-direction: column;
        align-items: center;
        overflow:hidden;
        background-color: #fff;
        padding-bottom: 10rem;
    `
    const TopBg = styledComponents.div`
        // display: flex;
        width: 100vw;
        height: 270px;
        background: rgba(222, 61, 109, 0.1);
    `

    const DashboardContainer = styledComponents.div`
        // display: flex;
        background-color: #fff;
        padding: 1.5rem 3.75rem;
        width: 42.5rem;
        gap: 2rem;
        margin-top: -11.875rem;
        flex-direction: column;
        align-items: center;
        height: 930px;
        border: 1px solid #D9D9D9;

    `;
    const Title = styledComponents.h2`
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    padding-top: 24px;
    padding-bottom: 32px;
    line-height: 2.4rem;
    color: #012A4A;
    `
    const WalletBalance = styledComponents.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    margin: 32px auto;
    gap: 4px;
    text-align: center;

    background: #DE3D6D;
    border-radius: 24px;
    `
    const TotalAmount = styledComponents.p 
        `font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: #FFFFFF;
        `
    
    return (
        <Div>
            <TopBg> </TopBg>
            <DashboardContainer>
            <Title>Dashboard</Title>
                <WalletBalance>
                    <span className='wallet_bal_title'>Wallet Balance</span>
                    <TotalAmount>₦21,350.00</TotalAmount>
                    <span className='wallet_active_lebal'>Account is active</span>
                </WalletBalance>
                
                <div>
                    <TabGroup />
                </div>
            </DashboardContainer>
        </Div>
    );
}

export default Dashboard;