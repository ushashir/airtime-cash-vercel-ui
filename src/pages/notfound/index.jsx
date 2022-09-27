import React from 'react';
import Nav from '../../components/nav';

function Notfound() {
    return (
        <div>
            <Nav />
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height:"100vh"}}>
            <h1>Page Note found</h1>
            </div>
        </div>
    );
}

export default Notfound;