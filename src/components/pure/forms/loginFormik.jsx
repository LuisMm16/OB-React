import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
  }
);

const LoginFormik = () => {

  const initialCredentials = {
    email: '',
    password: ''
  }

  const navigate = useNavigate();

  return (
    <div>
      <h4>Login Form</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem('credentials', values);
          navigate('/profile');
        }}
      >

        {/* Obtain props from formik */}

        {
          ({ values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur
          }) => (
            <Form>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="example@email.com"
                type="email"
              />

              {
                errors.email && touched.email && (
                  <ErrorMessage
                    name='email'
                    component='div'
                  />
                )
              }

              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="**********"
                type="password"
              />
              {/* Password errors */}
              {
                errors.password && touched.password && (
                  <ErrorMessage
                    name='password'
                    component='div'
                  />
                )
              }

              <button type="submit">Submit</button>

              {
                isSubmitting ? (<p>Login your credentials...</p>) : null
              }
            </Form>
          )
        }

      </Formik>
    </div>
  );
}

export default LoginFormik;
