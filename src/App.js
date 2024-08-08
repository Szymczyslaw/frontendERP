import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Inventory from './components/pages/Inventory';
import Sales from './components/pages/Sales';
import Customers from './components/pages/Customers';
import CustomerDetails from './components/pages/CustomerDetails';
import CustomerForm from './components/pages/CustomerForm';
import EditCustomer from './components/pages/EditCustomer';
import Contracts from './components/pages/Contracts';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './resources/logo.png';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {/* Navbar */}
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link className="navbar-brand" to="/">
            <img src={logo} alt="ERP System Logo" style={{width: 100}}/>
                                ERP System
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-2">
                        {/* Sidebar */}
                        <div className="bg-light border-right" id="sidebar-wrapper">
                            <div className="list-group list-group-flush">
                                <Link to="/" className="list-group-item list-group-item-action bg-light">Home</Link>
                                <Link to="/inventory" className="list-group-item list-group-item-action bg-light">Inventory</Link>
                                <Link to="/sales" className="list-group-item list-group-item-action bg-light">Sales</Link>
                                <Link to="/customers" className="list-group-item list-group-item-action bg-light">Customers</Link>
                                <Link to="/contracts" className="list-group-item list-group-item-action bg-light">Contracts</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        {/* Main Content */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/inventory" element={<Inventory />} />
                            <Route path="/sales" element={<Sales />} />
                            <Route path="/contracts" element={<Contracts />} />
                            <Route path="/customers" element={<Customers />} />
                            <Route path="/customers/:id" element={<CustomerDetails />} />
                            <Route path="/add-customer" element={<CustomerForm />} />
                            <Route path="/edit-customer/:id" element={<EditCustomer />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;