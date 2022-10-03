import React, { useEffect } from 'react';
import { useState } from 'react'
import { userWithdawalHistory } from '../../api';
import './style.scss'

const WithdrawalHistory = () => {
        const [wx, setWx] = useState([])

        const getWx = async()=>{
            const withdrawal = await userWithdawalHistory()
            setWx(withdrawal.data.response)
        } 

        useEffect(()=>{
            getWx()
        },[])
    console.log(wx)

        return (
            <div className='tH-Frame1-8747'>
            {
                wx.map((oneWx)=>{
                    return(
                <div className='tH-Frame-8744'>
                    <div className='tH-Frame-8743'>
                        <p className='tH-day_time'><b>{new Date(oneWx.createdAt).toLocaleDateString('en-US', {
                            weekday: 'long'})},</b> {new Date(oneWx.createdAt).toLocaleTimeString('en-US', {
                                hour: '2-digit', minute:'2-digit'
                            })}</p>
                        <p className='tH-withdraw'>Withdraw fund</p>
                        <p className='tH-date'>{new Date(oneWx.createdAt).toLocaleString().slice(0, 10)}</p>
                    </div>
                    <div className='tH-Frame-8650'>
                        <div className='tH-Frame-8537'>
                            <p className='tH-received'>{oneWx.status}</p>
                        </div>
                        <p>{oneWx.amount}</p>
                    </div>
                </div>
                    )
            })
        }
        </div>
         
            
   
    )}

export default WithdrawalHistory;
