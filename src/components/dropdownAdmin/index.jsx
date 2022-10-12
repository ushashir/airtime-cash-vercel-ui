import React, { useState } from "react"
import AmountModal from "../modal"

const Dropdown = ({data, setId}) => {
    const [showModal, setShowModal] = useState(false)
    const [close, setClose] = useState(true)

    const IdFunction = () => {
        setId(-1)
        setShowModal(true)
    }

    return (
          <div  className="dropdownContent">
          <button onClick={IdFunction} className="edit">Edit</button>
          <button className="cancel">Cancel</button>
          { showModal && <AmountModal data={[data.email, data.amount]} /> }
           </div>
    )
                            
}

export default Dropdown