
import { useEffect } from "react"
import { useState } from "react"
import { allTx } from "../../api"
import ContentLoader from "react-content-loader"
import "./admin.scss"
const Admin = () => {
    const [transactions, setTransactions] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getTxs = async() => {
            const res = await allTx()
            setTransactions(res.data.response)
            setIsLoading(false)
        } 
        getTxs()
    },[])
console.log(transactions)

const MyLoader = () => (
    <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={320}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  );
    return (
        <>
        <table>
                <caption>Admin Dashboard</caption>
            
                {isLoading && <MyLoader style={{margin: "0 auto"}} />}  
            
  <thead>
    <tr>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Amount Sent</th>
      <th scope="col">Amount to Recieve</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
                  
         
    { transactions && transactions.map(tx => { 
    return(
    <tr>
        <td data-label="Email">{ tx.email}</td>
        <td data-label="Phone Number">{ tx.phone}</td>
        <td data-label="Amount Sent">{ tx.amount}</td>
        <td data-label="Amount to Recieve">{ tx.amountToReceive}</td>
      <td data-label="Actions"><span className="table_actions">...</span></td>
    </tr>)
                             }) 
} 
  
 
  </tbody>

</table>
        </>
    )
}

export default Admin