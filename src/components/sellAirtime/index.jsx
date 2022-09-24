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
                   {/* <Input type="text" id='network' placeholder='Select network' /> */}
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














        // <div className='sellAirtime-main-div'>
        //     <div className='network-destination-container'>
        //     <h4>Sell Airtime</h4>
        //     <form className='sellAirtime_form'>
        //         <div className='network_main_container'>
        //             <div className='network_name_container'>
        //                 <p className='network-text'>Network</p>
        //                     <div className='network_input_container'>
        //                         <input type="text"
        //                              placeholder='Select network'
        //                         />
        //                     </div>
        //             </div>
        //         </div>

        //         <div className='phone_number_main_container'>
        //             <div className='phone_number_name_div'>
        //                 <p className='phone_number-text'>Phone Number</p>
        //                     <div className='phone_number_input_container'>
        //                         <div className='phoneNumber-placeholder-container'>
        //                         <input type="text"
        //                              placeholder='Phone Number'
        //                         />
        //                         </div>
        //                     </div>
        //             </div>
        //         </div>

        //         <div className='amountToSell_main_box'>
        //             <div className='amountToSell_name_div'>
        //                 <p className='amountToSell-text'>Amount to Sell</p>
        //                     <div className='amountToSell_input_container'>
        //                         <input type="text"
        //                              placeholder='NGN'
        //                         />
        //                     </div>
        //             </div>
        //         </div>

        //         <div className='ussd_main_box'>
        //             <div className='ussd_name_div'>
        //                 <p className='ussd-text'>USSD</p>
        //                     <div className='ussd_input_container'>
        //                         <input type="text"
        //                              placeholder='*780*amount*09088756433*5000#'
        //                         />
        //                     </div>
        //             </div>
        //         </div>

        //         <div className='amountToRecieve_main_box'>
        //             <div className='amountToRecieve_name_div'>
        //                 <p className='amountTorecieve-text'>Amount to Recieve</p>
        //                     <div className='amountToRecieve_input_container'>
        //                         <input type="text"
        //                              placeholder='NGN'
        //                         />
        //                     </div>
        //             </div>
        //         </div>

        //         <div className='Destination_phone_number_main_box'>
        //             <div className='Destination_phone_number_name_div'>
        //                 <p className='Destination_phone_number-text'>Destination Phone Number</p>
        //                     <div className='Destination_phone_number_input_container'>
        //                         <input type="text"
        //                              placeholder='Destination phone number'
        //                         />
        //                     </div>
        //             </div>
        //         </div>
        //         <div>
        //             <input className='sellAirtime-btn' type="submit" value="Sell Airtime" />
        //         </div>
        //     </form>
        //     </div>
        // </div>
    )
}


export default SellAirtime


