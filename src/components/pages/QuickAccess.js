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
                <div className="quick-access-item" style={{backgroundColor: 'rgba(94,255,124,0.35)'}}></div>
                <div className="quick-access-item" style={{backgroundColor: 'rgba(255,89,89,0.35)'}}></div>
                <div className="quick-access-item" style={{backgroundColor: 'rgba(72,104,255,0.35)'}}></div>
                <div className="quick-access-item" style={{backgroundColor: 'rgba(255,246,99,0.35)'}}></div>
            </div>
        </div>
    );
};


export default QuickAccess;
