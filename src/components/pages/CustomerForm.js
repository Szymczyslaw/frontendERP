import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {addCustomer} from '../../services/apiService';
import '../styles/Customers.css';
import '../styles/containers/Container.css';

const CustomerForm = () => {
    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: ''
    });

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    };
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addCustomer(customer);
            navigate('/customers');
            console.log('Customer added:', response.data);
        } catch (error) {
            console.error('Error adding customer:', error);
        }
    };

    return (
        <div className="container table-container">
            <div className="title">Add Customer</div>

            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" value={customer.firstName} onChange={handleChange}
                       placeholder="First Name"/>
                <input type="text" name="lastName" value={customer.lastName} onChange={handleChange}
                       placeholder="Last Name"/>
                <input type="email" name="email" value={customer.email} onChange={handleChange} placeholder="Email"/>
                <input type="text" name="phoneNumber" value={customer.phoneNumber} onChange={handleChange}
                       placeholder="Phone Number"/>
                <input type="text" name="address" value={customer.address} onChange={handleChange}
                       placeholder="Address"/>
                <button type="submit">Add Customer</button>
            </form>
        </div>

    );
};

export default CustomerForm;