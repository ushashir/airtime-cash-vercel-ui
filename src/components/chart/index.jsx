import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { allTx } from '../../api';
import "./chart.scss"

const MyCharts = () => {
    const [txs, setTxs] = useState([])
    const [amount, setAmount] = useState([])
    const [network, setNetwork] = useState([])
    useEffect(() => {
        const getAllTx = async () => {
            const response = await allTx()
            console.log(response)
            setTxs(txs)
            setAmount(response?.data.response.map(item=>item.amount))
            setNetwork(response?.data.response.map(item => {

            //    const month =  new Date(item.createdAt).toLocaleString('default', { month: 'long' })
               return(item.network)
            }))
        }
        getAllTx()
    }, [])
    console.log(txs)
    // console.log(date)
  const series = [ //data on the y-axis
    {
      name: "Revenue",
          data: amount
      
    }
  ];
  const options = { //data on the x-axis
    chart: { id: 'bar-chart'},
    xaxis: {
      categories: network
    }
  };

  return (
    <div className='chart_wrapper'>
      <Chart
        options={options}
        series={series}
        type="bar"
              width="100%"
              height="350"
      />
    </div>
  )
}

export default MyCharts;