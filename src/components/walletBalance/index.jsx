import { useState, useEffect, useContext } from "react"
import { getUserData } from "../../api"
import { BankContext } from "../../context/userContext";

const WalletBalance = () => {
    const { walletBalance } = useContext(BankContext);
    return (
        <>
            <h2 className='Title'>Dashboard</h2>
            <div className='WalletBalance'>
                <span className='wallet_bal_title'>Wallet Balance</span>
                <div className='TotalAmount'>₦{walletBalance}</div>
                <span className='wallet_active_label'>Account is active</span>
            </div>
        </>
    )
}

export default WalletBalance