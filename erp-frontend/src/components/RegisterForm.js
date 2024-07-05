import React from 'react';
import './styles/RegisterForm.css';

const RegisterForm = () => {
  return (
    <div className="register-form">
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="register-firstname">First Name:</label>
          <input type="text" id="register-firstname" name="firstname" required />
        </div>
        <div>
          <label htmlFor="register-lastname">Last Name:</label>
          <input type="text" id="register-lastname" name="lastname" required />
        </div>
        <div>
          <label htmlFor="register-id">Id:</label>
          <input type="text" id="register-id" name="id" required />
        </div>
        <div>
          <label htmlFor="register-password">Password:</label>
          <input type="password" id="register-password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
