import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerById } from '../../services/apiService';

const CustomerDetails = () => {
    const { id } = useParams(); // Correctly extracting 'id' from the URL
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await getCustomerById(id);
                setCustomer(response.data);
            } catch (error) {
                console.error('Error fetching customer details:', error);
                setError('Failed to fetch customer details.');
            }
        };

        fetchCustomer();
    }, [id]); // Effect re-runs if id changes

    if (error) {
        return <p>{error}</p>;
    }

    if (!customer) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <p>Details for customer ID: {id}</p> {/* Use 'id' from useParams */}
            <h1>Customer Details: {customer.firstName} {customer.lastName}</h1>
            <p>Email: {customer.email}</p>
            <p>Phone Number: {customer.phoneNumber}</p>
            <p>Address: {customer.address}</p>
            <div>
                <h2>Contracts</h2>
                <ul>
                    {customer.contractList && customer.contractList.map(contract => (
                        <li key={contract.id}>
                            Contract ID: {contract.id} - Details...
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CustomerDetails;