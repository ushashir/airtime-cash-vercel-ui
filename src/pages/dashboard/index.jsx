import React from 'react';
import Nav from '../../components/nav'
import './style.scss'

function Dashboard(props) {
    // const value = React.useContext(UserContext);
    return (
        <div>
            <h1>Todo - Dashboard</h1>
            <a href='/update'>Update user data</a>
            {/* <Nav /> */}
            {/* <p>{value}</p> */}
        </div>
    );
}

export default Dashboard;