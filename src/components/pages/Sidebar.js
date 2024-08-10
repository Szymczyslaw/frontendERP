import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
                <Link to="/" className="list-group-item list-group-item-action bg-light">Home</Link>
                <Link to="/inventory" className="list-group-item list-group-item-action bg-light">Inventory</Link>
                <Link to="/sales" className="list-group-item list-group-item-action bg-light">Sales</Link>
                <Link to="/customers" className="list-group-item list-group-item-action bg-light">Customers</Link>
                <Link to="/contracts" className="list-group-item list-group-item-action bg-light">Contracts</Link>
            </div>
        </div>
    );
};

export default Sidebar;