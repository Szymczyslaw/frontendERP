import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../styles/Home.css';

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="home">
      <h2>Welcome User 123!</h2>
      <div className="container">
        <div className="toggle">
          <button onClick={toggleForm}>
            {isLogin ? 'Switch to Register' : 'Switch to Login'}
          </button>
        </div>
        <div className="auth-container">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default Home;