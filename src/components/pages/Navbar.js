import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/logo.png';
import '../styles/Navbar.css';
import SecondaryNavbar from './SecondaryNavbar';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="container-fluid">
                <nav className="navbar">
                    <Link className="navbar-brand" to="/">
                        <img className="logo" src={logo} alt="ERP System Logo"/>
                        <span className="company-name">COMPANY NAME</span>
                    </Link>
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search"
                            id="main-search-mobile"
                            name="main-search-mobile"
                            className="search-bar"
                        />
                        <button type="button" id="search-icon" className="search-icon-mobile">
                            <i className="fas fa-search search-icon"></i>
                        </button>
                    </div>
                    <div className="user-section">
                        <i className="fas fa-user user-icon"></i>
                        <div className="user-name">User 123</div>
                    </div>
                </nav>
            </div>
            <SecondaryNavbar />
        </div>
    );
};

export default Navbar;