import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCustomerById, editCustomer } from '../../services/apiService';

const EditCustomer = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await getCustomerById(id);
                setCustomer(response.data);
            } catch (error) {
                console.error('Error fetching customer:', error);
                setError('Failed to load customer.');
            }
        };

        fetchCustomer();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editCustomer(id, customer);
            navigate('/customers'); // Redirect to the customers list after successful update
        } catch (error) {
            console.error('Failed to update customer:', error);
            setError('Failed to update customer.');
        }
    };

    if (!customer) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={customer.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={customer.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={customer.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Phone Number:
                <input
                    type="text"
                    name="phoneNumber"
                    value={customer.phoneNumber}
                    onChange={handleChange}
                />
            </label>
            <label>
                Address:
                <input
                    type="text"
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Update Customer</button>
        </form>
    );
};

export default EditCustomer;