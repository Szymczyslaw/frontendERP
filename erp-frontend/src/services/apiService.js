import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // tutaj zależy na jakim localhoście jest backend

// Product API methods
export const getProducts = () => axios.get(`${API_URL}/products`);

// Sales API methods
export const getSales = () => axios.get(`${API_URL}/sales`);
