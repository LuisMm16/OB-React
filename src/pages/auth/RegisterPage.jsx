import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Link to='/login'>
        Already have an account? Log In.
      </Link>
    </div>
  );
}

export default RegisterPage;
