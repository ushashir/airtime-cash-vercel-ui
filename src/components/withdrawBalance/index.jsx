import './style.scss'
// import React from 'react';
import React, { useState } from 'react';
import Button from '../common/button';
import Input from '../common/inputField';



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
        <div>
            <p>Withdraw </p>
            <form className='form_container'>
                <div className="form_group">
                    <div className="label_container">
                        <label htmlFor='selectAccount' className='form_label'>
                            Select Account
                        </label>
                    </div>
                    <div className="input_container">
                        <select id='selectAccount' className='selectAccount'
                            placeholder='select'>
                            <option >Select</option>
                            <option>UBA(00011122233444)</option>
                            <option>STERLING(00011122233444)</option>
                            <option>GTB(00011122233444)</option>
                            <option>FCMB(00011122233444)</option>
                            <option>FIDELITY(00011122233444)</option>
                        </select>
                    </div>
                </div>
        
                 <div className="form_group">
                    <div className="label_container">
                        <label
                            htmlFor='accountName'
                            className='form_label'
                        >
                            Account Name
                        </label>
                    </div>
                    <Input
                        type="text"
                        placeholder="Ushahemba"
                        onChange={onChange}
                        value={accountName}
                    />
                </div>
                 <div className="form_group">
                    <div className="label_container">
                        <label htmlFor='accountNumber'
                            className='form_label'>
                            Account Number
                        </label>
                    </div>
                      <Input
                        type="text"
                        placeholder="12366325875"
                        onChange={onChange}
                        value={accountNumber}
                    />
               
                </div>
                  <div className="form_group">
                    <div className="label_container">
                        <label htmlFor='amount' className='form_label'>
                            Amount
                        </label>
                    </div>
                       <Input
                        type="text"
                        placeholder="NGN"
                        onChange={onChange}
                        value={amount}
                    />
    
                </div>
                 <div className="form_group">
                    <div className="label_container">
                        <label htmlFor='password' className='form_label'>
                            Password
                      
                        </label>
                    </div>
                     <Input
                        type="text"
                        placeholder="12366325875"
                        onChange={onChange}
                        value={password}
                    />
                   
                </div>
                
                < Button value="Withdaw" type="submit" />
               
                
            </form>
        </div>
    );
}

export default Withdraw;