import React from 'react'
import './style.scss'
import Button from "../common/button";
function ViewAccountDetails() {
  return (
    <div className="mgboardcontainer">
      <div className="mgboardheader">
        <div className="mgbordtitle">
          <h1>Bank Account</h1>
        </div>
        <div className="mgboardsubtitle">
          <a href="/">View Bank accounts</a>
        </div>
      </div>
      <div className="veiwAccContainer">
        <div className="veiwAccText">
          <p>First Name</p>
          <p>3170087553</p>
          <p>Babatunde Ola</p>
        </div>
        <div className="viewAccBtn">
          <button>Remove</button>
        </div>
      </div>
      <div className="veiwAccContainer">
        <div className="veiwAccText">
          <p>First Name</p>
          <p>3170087553</p>
          <p>Babatunde Ola</p>
        </div>
        <div className="viewAccBtn">
          <button>Remove</button>
        </div>
      </div>
      <Button value="Add New Bank" type="submit" />
    </div>
  );
}
export default ViewAccountDetails;