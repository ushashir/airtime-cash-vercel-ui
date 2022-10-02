import { useState, useEffect } from "react"
import { getUserData } from "../../api"

const WalletBalance = () => {
    // const { WalletBalance } = useContext(UserContext);
    const [walletBalance, setWalletBalance] = useState('')
    useEffect(() => {
        getUserData().then((res) => {
            const balance = res.response.wallet;
            setWalletBalance(balance)
        })
    }, [])
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