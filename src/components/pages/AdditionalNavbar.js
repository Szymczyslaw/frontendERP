import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/AdditionalNavbar.css';


const SecondaryNavbar = () => {
    return (
        <div className="additional-navbar">
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    );
};

export default SecondaryNavbar;