import React from 'react'
import Button from '../common/button'
import Input from '../common/inputField'
import './style.scss'

const SellAirtime = () => {

    return (
        <div className='sellAirtime-container'>
            <h4>Sell Airtime</h4>
            <form>
                
                   <label htmlFor="network">Network</label>
                   <select id='network'>
                        <option value="">Network</option>
                        <option value="">MTN</option>
                        <option value="">Glo</option>
                        <option value="">9mobile</option>
                        <option value="">Airtel</option>
                   </select>
                   
                   <label htmlFor="phone-number">Phone Number</label>
                   <Input type="text" name='phone-number' placeholder='Phone Number' />

                   <label htmlFor="amount-sell">Amount to Sell</label>
                   <Input type="text" name='amount-sell' placeholder='NGN' />

                   <label htmlFor="ussd">USSD</label>
                   <Input type="text" name='ussd' placeholder='*780*amount*09088756433*5000#' className='solid-input' />

                   <label htmlFor="amount-receive">Amount to Receive</label>
                   <Input type="text" name='amount-receive' placeholder='NGN' className='solid-input' disabled />

                   <label htmlFor="destination">Destination Phone Number</label>
                   <Input type="text" name='destination' placeholder='Destination phone number' className='solid-input' />

                   <Button type='submit' value='Sell Airtime' />

            </form>
        </div>
    )
}


export default SellAirtime


