import React, { useEffect, useState } from 'react';
import {getContracts} from '../../services/apiService';

const Contracts = () => {
  const [contracts, setContracts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContracts = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await getContracts();
        setContracts(response.data);
        if (response.data.length === 0) {
          setError('No contracts found.');
        }
      } catch (error) {
        console.error('Error fetching contracts:', error);
        setError('Failed to fetch contracts.');
      } finally {
        setLoading(false);
      }
    };

    fetchContracts();
  }, []);

  return (
    <div>
      <h1>Contracts:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {contracts.map(contract => (
            <li key={contract.id}>{contract.grossPrice} {contract.netPrice}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contracts;