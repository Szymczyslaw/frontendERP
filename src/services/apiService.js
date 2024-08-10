import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // tutaj zależy na jakim localhoście jest backend

// Product API methods
export const getProducts = () => axios.get(`${API_URL}/products`);
// Sales API methods
export const getSales = () => axios.get(`${API_URL}/sales`);
// Customers API methods
export const getCustomers = () => axios.get(`${API_URL}/v1/customers`);
export const getCustomerById = (id) => axios.get(`${API_URL}/v1/customers/${id}`);
export const addCustomer = (customerData) => {
    return axios.post(`${API_URL}/v1/customers`, customerData);
};
export const editCustomer = (customerData) => {
    return axios.put(`${API_URL}/v1/customers`, customerData, {mode: 'no-cors'});
};
// Contracts API methods
export const getContracts = () => axios.get(`${API_URL}/v1/contracts`);



