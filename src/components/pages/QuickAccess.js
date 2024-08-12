import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/QuickAccess.css';
import '../styles/containers/Container.css';

const QuickAccess = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="title">Quick Access</div>
            <div className="quick-access-bar">
                <div className="quick-access-item" style={{backgroundColor: 'rgba(114,229,125,0.2)'}}></div>
                <div className="quick-access-item" style={{backgroundColor: 'rgba(225,64,64,0.2)'}}></div>
                <div className="quick-access-item" style={{backgroundColor: 'rgba(81,102,197,0.2)'}}></div>
                <div className="quick-access-item" style={{backgroundColor: 'rgba(255,191,72,0.2)'}}></div>
            </div>
        </div>
    );
};

export default QuickAccess;