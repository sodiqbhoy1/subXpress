import React, { useState } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email.');
      return;
    }

    // Here you can handle the password reset logic (e.g., API call)
    // For now, we'll just simulate a successful submission.
    setMessage('If an account with that email exists, a reset link has been sent.');
    setError('');
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex justify-center items-center bg-[#001427]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#e74c3c]">Forgot Password</h2>
        
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#001427]">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4d58d]"
              placeholder="Enter your email"
              required
              />
          </div>

          {/* Error Message */}
          {error && <p className="text-[#8d0801] text-sm mt-2">{error}</p>}

          {/* Success Message */}
          {message && <p className="text-[#f4d58d] text-sm mt-2">{message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-[#e74c3c] text-white rounded-lg hover:bg-[#8d0801] focus:outline-none"
            >
            Send Reset Link
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-[#001427]">
            Remembered your password?{' '}
            <Link to="/signin" className="text-[#e74c3c] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
            </>
  );
};

export default ForgotPassword;
