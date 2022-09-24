import React from 'react'
import Button from '../common/button'
import {ManageAccountWrapper} from '../manageAccount/manageAccountCss';

function ManageAccount() {
  return (
    <ManageAccountWrapper>
            <div className='top'>
                <div>
                <p className='acc'>Bank Account</p>
                </div>  
                <div>
                <p className='view'>View Bank Accounts</p>
                </div>
            </div>

            <form>
                <div>
                    <label>Bank Name</label><br/>
                    <select type="text" value='Bank Name' placeholder='Bank Name'>
                        <option>Select</option>  
                        <option>GT Bank</option>
                        <option>First Bank</option>
                        <option>Union Bank</option>
                        <option>UnityBank</option>
                        <option>Citibank</option>
                        <option>Access Bank</option>
                        <option>Wema Bank</option>
                        <option>Stanbic IBTC Bank</option>
                        <option>Standard Chartered Bank</option>
                        <option>Heritage Bank</option>
                        <option>Keystone Bank</option>
                        <option>Jaiz Bank</option>
                        <option>FCMB</option>
                        <option>Providus Bank</option>
                        <option>Skye Bank</option>
                        <option>Parallex Bank</option>
                        <option>Fidelity Bank</option>
                        <option>Ecobank</option>
                        <option>UBA</option>
                        <option>Zenith Bank</option>
                        <option>Sterling Bank</option>
                        <option>First City Monument Bank</option>
                        <option>United Bank for Africa</option>
                        <option>Stanbic IBTC Bank</option>
                        <option>Standard Chartered Bank</option>
                        <option>Heritage Bank</option>
                        <option>Keystone Bank</option>
                        <option>Jaiz Bank</option>
                        <option>FCMB</option>
                    </select>
                </div>

                
            </form>
            <Button value="Add Bank" type="submit"/>
        </ManageAccountWrapper>
  
  )
}

export default ManageAccount