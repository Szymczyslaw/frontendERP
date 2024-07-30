import React, { useEffect, useState } from 'react';
import { getSales } from '../../services/apiService'; // Adjust the path based on your folder structure

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await getSales();
        setSales(response.data);
      } catch (error) {
        console.error('Error fetching sales:', error);
      }
    };

    fetchSales();
  }, []);

  return (
    <div>
      <h1>Sales</h1>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>{sale.productName} - ${sale.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sales;
