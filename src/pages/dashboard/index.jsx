import React from 'react';
import Navbar from './nav/'
import './style.scss'

function Dashboard(props) {
    return (
        <div>
            <Navbar />
            <p>Welcome to Dashboad page</p>
        </div>
    );
}

export default Dashboard;