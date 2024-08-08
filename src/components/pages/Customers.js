import React, { useEffect, useState, useMemo } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {getCustomers} from '../../services/apiService';
import styles from '../styles/Customers.module.css';

const Customers = () => {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const handleEdit = (customerId) => {
        navigate(`/edit-customer/${customerId}`);
    };

    const handleSort = () => {
        let direction = 'ascending';
        if (sortConfig.key === 'name' && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key: 'name', direction });
    };

    const sortedCustomers = useMemo(() => {
        let sortableItems = [...customers];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                const aName = `${a.firstName} ${a.lastName}`;
                const bName = `${b.firstName} ${b.lastName}`;
                if (aName < bName) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aName > bName) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [customers, sortConfig]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await getCustomers();
                console.log(response);
                setCustomers(response.data);
                if (response.data.length === 0) {
                    setError('No customers found.');
                }
            } catch (error) {
                console.error('Error fetching customers:', error);
                setError('Failed to fetch customers.');
            }
        };

        fetchCustomers();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Customers:</h1>
            <Link to="/add-customer" className={`${styles.button} btn-primary`}>Add Customer</Link>
            {error ? (
                <p>{error}</p>
            ) : (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th onClick={handleSort}>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCustomers.map(customer => (
                            <tr key={customer.id}>
                                <td>
                                    <Link to={`/customers/${customer.id}`} className={styles.link}>
                                        {customer.id}
                                    </Link>
                                </td>
                                <td>{customer.firstName} {customer.lastName}</td>
                                <td>
                                    <button onClick={() => handleEdit(customer.id)} className={styles.button}>Edit
                                    </button>
                                    <button className={styles.button}>Delete
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Customers;