import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import '../styles/Home.css';

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (

    <div className="home">
      <h1>Welcome to ERP</h1>
        <nav className="sidebar">
            <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/sales">Sales</Link></li>
            </ul>
        </nav>
      <div className="container">
        <div className="toggle">
          <button onClick={toggleForm}>
            {isLogin ? 'Switch to Register' : 'Switch to Login'}
          </button>
        </div>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default Home;
