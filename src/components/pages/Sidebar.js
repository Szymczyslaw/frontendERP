import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import '../styles/containers/Container.css'

const Sidebar = () => {
    const [isCustomerMenuOpen, setIsCustomerMenuOpen] = useState(false);

    const toggleCustomerMenu = () => {
        setIsCustomerMenuOpen(!isCustomerMenuOpen);
    };

    return (
        <div className="container sidebar">
            <div className="title">
                Departments
            </div>
            <div className="list-group">
                <Link to="/inventory" className="list-group-item list-group-item-action">Inventory</Link>
                <Link to="/sales" className="list-group-item list-group-item-action">Sales</Link>

                <div className="list-group-item list-group-item-action" onClick={toggleCustomerMenu}>
                    Customers {isCustomerMenuOpen}
                </div>
                {isCustomerMenuOpen && (
                    <div className="submenu">
                        <Link to="/customers" className="list-group-item list-group-item-action">Show customers</Link>
                        <Link to="/add-customer" className="list-group-item list-group-item-action">Add customer</Link>
                    </div>
                )}

                <Link to="/contracts" className="list-group-item list-group-item-action">Contracts</Link>
            </div>
        </div>
    );
};

export default Sidebar;


