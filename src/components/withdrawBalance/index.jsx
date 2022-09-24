import './style.scss'
// import React from 'react';
import React, { useState } from 'react';
import Button from '../common/button';



function Withdraw() {
    const initialState = {
    selectAccount: '',
    accountName: '',
    accountNumber: '',
    amount: '',
    password: '',
  }
  const [withdraw, setWithdraw] = useState(initialState)
const { selectAccount, accountName, accountNumber, amount, password } = withdraw;

  const onChange = e => setWithdraw({...withdraw, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    if (
      selectAccount === '' ||
      accountName === '' ||
      accountNumber === '' ||
      amount === '' ||
      password === '' 
    ) {
      console.log("enter all fields")
    } else {
        console.log("call register function register")
    //   register({selectAccount, accountName, accountNumber, password})
    }
  }
 
    return (
        <div className='withdraw-balance'>
            <p>Withdraw </p>
            <form action="">
                <div className='input-field'>
                    <label htmlFor="selectAccount">Select Account</label> <br></br>
                    <input type="text"
                        className='input-field'
                        name='selectAccount'
                        placeholder='select'
                        value={selectAccount}
                        onChange={onChange}
                       />
                </div>
                 <div className=' input-field'>
                    <label htmlFor="accountName">Account Name</label> <br></br>
                    <input type="text"
                        name='accountName'
                        placeholder='BabatundeOla'
                        value={accountName}
                        onChange={onChange}
                    />
                </div>
                 <div className=' input-field'>
                    <label htmlFor="accountNumber">Account Number</label> <br></br>
                    <input type="number"
                        name='accountNumber'
                        placeholder='8746526671'
                        value={accountNumber}
                        onChange={onChange}/>
                </div>
                 <div className=' input-field'>
                    <label htmlFor="amount">Amount</label> <br></br>
                    <input type="number"
                        name='amount'
                        placeholder='NGN'
                        value={amount}
                        onChange={onChange}
                    />
                </div>
                 <div className=' input-field'>
                    <label htmlFor="password">Password</label> <br></br>
                    <input type="number"
                        name='password'
                        placeholder='password'
                         value={password}
                        onChange={onChange}
                    />
                </div>
                
                < Button value="Withdaw" type="submit" />
               
                
            </form>
        </div>
    );
}

export default Withdraw;