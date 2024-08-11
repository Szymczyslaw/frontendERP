import React, {useEffect, useState, useMemo} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {getCustomers} from '../../services/apiService';
import styles from '../styles/Customers.css';
import '../styles/containers/Container.css'

const Customers = () => {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState('');
    const [sortConfig, setSortConfig] = useState({key: null, direction: 'ascending'});

    const handleEdit = (customerId) => {
        navigate(`/edit-customer/${customerId}`);
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({key, direction});
    };

    const sortedCustomers = useMemo(() => {
        let sortableItems = [...customers];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                if (sortConfig.key === 'name') {
                    aValue = `${a.firstName} ${a.lastName}`;
                    bValue = `${b.firstName} ${b.lastName}`;
                }

                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
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
            <div className="customers container">
                <div className={styles.container}>
                    <div className="title">Customers</div>
                    {error ? (
                        <p>{error}</p>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Id</th>
                                    <th onClick={() => handleSort('name')} className={styles.sortableHeader}>Name</th>
                                    <th onClick={() => handleSort('dateAdded')} className={styles.sortableHeader}>Date Added</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedCustomers.map((customer, index) => (
                                    <tr key={customer.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Link to={`/customers/${customer.id}`} className={styles.link}>
                                                {customer.id}
                                            </Link>
                                        </td>
                                        <td>
                                            {customer.firstName} {customer.lastName}
                                        </td>
                                        <td>{customer.dateAdded || 'N/A'}</td>
                                        <td>
                                            <button onClick={() => handleEdit(customer.id)}
                                                className={styles.button}>Edit
                                            </button>
                                            <button className={styles.button}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
    );
};


            export default Customers;
