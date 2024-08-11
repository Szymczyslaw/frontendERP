import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Inventory from './components/pages/Inventory';
import Sales from './components/pages/Sales';
import Customers from './components/pages/Customers';
import CustomerDetails from './components/pages/CustomerDetails';
import CustomerForm from './components/pages/CustomerForm';
import EditCustomer from './components/pages/EditCustomer';
import Contracts from './components/pages/Contracts';
import Navbar from './components/pages/Navbar';
import Sidebar from './components/pages/Sidebar';
import RightSidebar from './components/pages/RightSidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Navbar/>
                    </div>
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-8">
                        <div>
                        <Navbar/>
                        </div>

                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/inventory" element={<Inventory/>}/>
                            <Route path="/sales" element={<Sales/>}/>
                            <Route path="/contracts" element={<Contracts/>}/>
                            <Route path="/customers" element={<Customers/>}/>
                            <Route path="/customers/:id" element={<CustomerDetails/>}/>
                            <Route path="/add-customer" element={<CustomerForm/>}/>
                            <Route path="/edit-customer/:id" element={<EditCustomer/>}/>
                        </Routes>
                    </div>
                    <div className="col-md-2">
                        <RightSidebar/> {/* Add Right Sidebar */}
                        <RightSidebar/> {/* Add Right Sidebar */}
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;