import React, { useEffect } from 'react';
import { useState } from 'react';
import { userTx } from '../../api';
import './style.scss'

const TransactionHistory = () => {
const [tx, setTx]= useState([])

const getTx = async()=>{
    const transactions = await userTx()
    setTx(transactions.data.response)
 } 
    useEffect(()=>{
        getTx()
    },[])
console.log(tx)
    return (

        <div className='tH-Frame1-8747'>
            {
            tx.map((oneTx)=>{
                return(
                
                    <div className='tH-Frame-8744'>
                <div className='tH-Frame-8743'>
                    <p className='tH-day_time'><b>{new Date(oneTx.createdAt).toLocaleDateString('en-US', {
                        weekday: 'long'})}, </b> 
                        {new Date(oneTx.createdAt).toLocaleTimeString('en-US', {
                        hour: '2-digit', minute:'2-digit'
                    })} </p>
                    <p className='tH-withdraw'>{oneTx.network}</p>
                    <p className='tH-date'>{new Date(oneTx.createdAt).toLocaleString().slice(0, 10)}</p>
                </div>
                <div className='tH-Frame-8650'>
                    <div className='tH-Frame-8537'>
                        <p className='tH-received'>{oneTx.status}</p>
                    </div>
                    <p style={{paddingRight: "10px"}}>₦{oneTx.amount}</p>
                </div>
            </div>
                )
})
}
        </div>
    );
}

export default TransactionHistory;
