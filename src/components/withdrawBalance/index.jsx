

import { useState } from 'react';
import './style.scss'

// inititaal states
// const [selectAccount, setSelectAccount] = useState("");
// const [accountName, setAccountName] = useState("");
// const [accountName, setAccountNumber] = useState("");
// const [amount, setAmount] = useState("");
// const [password, setPassword] = useState("");
 
function Withdraw() {
    return (
        <div className='withdraw-balance'>
            <p>Withdraw </p>
            <form action="">
                <div className=' input-field'>
                    <label htmlFor="selectAccount">Select Account</label> <br></br>
                    <input type="text"
                        name='selectAccount'
                        placeholder='select'
                       />
                </div>
                 <div className=' input-field'>
                    <label htmlFor="accountName">Account Name</label> <br></br>
                    <input type="text" name='accountName' placeholder='BabatundeOla' />
                </div>
                 <div className=' input-field'>
                    <label htmlFor="accountNumber">Account Number</label> <br></br>
                    <input type="number" name='accountNumber' placeholder='8746526671' />
                </div>
                 <div className=' input-field'>
                    <label htmlFor="amount">Amount</label> <br></br>
                    <input type="number" name='amount' placeholder='NGN' />
                </div>
                 <div className=' input-field'>
                    <label htmlFor="password">Password</label> <br></br>
                    <input type="number" name='password' placeholder='password' />
                </div>
               <button>Withdraw</button>
               
                
            </form>
        </div>
    );
}

export default Withdraw;