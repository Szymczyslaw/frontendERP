import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getCustomers } from '../../services/apiService';
import '../styles/Customers.css';
import '../styles/containers/Container.css';

const Customers = () => {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    const handleEdit = (customerId) => {
        navigate(`/edit-customer/${customerId}`);
    };

    const handleDelete = (customerId) => {
        // Add delete functionality here
        console.log(`Deleting customer with ID: ${customerId}`);
    };

    const handleActionChange = (event, customerId) => {
        const selectedAction = event.target.value;

        if (selectedAction === 'edit') {
            handleEdit(customerId);
        } else if (selectedAction === 'delete') {
            handleDelete(customerId);
        }

        // Reset the select element to default
        event.target.selectedIndex = 0;
    };

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const filteredCustomers = useMemo(() => {
        return customers.filter((customer) => {
            const name = `${customer.firstName} ${customer.lastName}`.toLowerCase();
            return (
                customer.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                name.includes(searchQuery.toLowerCase())
            );
        });
    }, [customers, searchQuery]);

    const sortedCustomers = useMemo(() => {
        let sortableItems = [...filteredCustomers];
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
    }, [filteredCustomers, sortConfig]);

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
        <div className="container table-container">
            <div className="title">Customers</div>
            <input
                type="text"
                placeholder="Search by ID or Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar2"
            />
            {error ? (
                <p>{error}</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th onClick={() => handleSort('name')} className="sortableHeader">Name</th>
                            <th onClick={() => handleSort('dateAdded')} className="sortableHeader">Date Added</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCustomers.map((customer, index) => (
                            <tr key={customer.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <Link to={`/customers/${customer.id}`} className="link">
                                        {customer.id}
                                    </Link>
                                </td>
                                <td>{customer.firstName} {customer.lastName}</td>
                                <td>{customer.dateAdded || 'N/A'}</td>
                                <td>
                                    <select
                                        className="action-select"
                                        onChange={(e) => handleActionChange(e, customer.id)}
                                    >
                                        <option value="" disabled selected>Choose Action</option>
                                        <option value="edit">Edit</option>
                                        <option value="delete">Delete</option>
                                    </select>
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
