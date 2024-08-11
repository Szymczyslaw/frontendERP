import React, {useEffect, useState, useMemo} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import styles from '../styles/QuickAccess.css';
import '../styles/containers/Container.css'

const QuickAccess = () => {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState('');

    return (
        <div className="container">
            <div className="title">Quick Access</div>
            <div className="quick-access-bar">
                <div className="quick-access-item" style={{backgroundColor: 'rgba(0,255,46,0.35)'}}></div>
                <div className="quick-access-item" style={{backgroundColor: 'rgba(255,0,0,0.35)'}}></div>
                <div className="quick-access-item" style={{backgroundColor: 'rgba(0,45,255,0.35)'}}></div>
                <div className="quick-access-item" style={{backgroundColor: 'rgba(255,242,0,0.35)'}}></div>
            </div>
        </div>
    );
};


export default QuickAccess;
