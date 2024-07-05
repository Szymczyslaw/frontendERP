import React from 'react';
import './styles/LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="login-username">Username:</label>
          <input type="text" id="login-username" name="username" required />
        </div>
        <div>
          <label htmlFor="login-password">Password:</label>
          <input type="password" id="login-password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
