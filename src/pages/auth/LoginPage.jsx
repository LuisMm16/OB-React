import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginFormik />
      <Link to='/register'>
        Don't have an account? Register here.
      </Link>
    </div>
  );
}

export default LoginPage;
