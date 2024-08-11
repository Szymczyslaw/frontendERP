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
            {error ? (
                <p>{error}</p>
            ) : (
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            )}
        </div>
    );
};


export default QuickAccess;
