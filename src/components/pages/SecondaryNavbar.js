import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SecondaryNavbar.css';


const SecondaryNavbar = () => {
    return (
        <div className="secondary-navbar">
            <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/sales">Sales</Link></li>
                <li><Link to="/customers">Customers</Link></li>
                <li><Link to="/contracts">Contracts</Link></li>
            </ul>
        </div>
    );
};

export default SecondaryNavbar;