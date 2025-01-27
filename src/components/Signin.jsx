import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from './Navbar';

const Signin = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-4">Sign In</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
              console.log(values);
          }}
          >
          {() => (
              <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter your email"
                  />
                <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter your password"
                  />
                <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
              </div>

              <div className="flex justify-between items-center mb-4">
                <a href="/forgot-password" className="text-blue-600 text-sm">Forgot Password?</a>
                <a href="/sign-up" className="text-blue-600 text-sm">Don't have an account? Click here</a>
              </div>

              <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
                  </>
  );
};

export default Signin;
