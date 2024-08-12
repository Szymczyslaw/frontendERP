import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdditionalNavbar.css';

const AdditionalNavbar = () => {
    return (
        <div className="additional-navbar">
            <div className="left-signs">
                <Link to="/">
                    <i className="fas fa-home"></i> Home
                </Link>
            </div>
            <div className="right-signs">
                <Link to="/settings">
                    <i className="fas fa-cog"></i> Settings
                </Link>
            </div>
        </div>
    );
};

export default AdditionalNavbar;