
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Registration logic goes here
    console.log('Registering with:', email, password, confirmPassword);
  };

  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Register Now!</h2>
          <form onSubmit={handleRegister} className="space-y-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e-mail"
              className="w-full p-4 bg-gray-700 rounded focus:outline-none"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="create password"
              className="w-full p-4 bg-gray-700 rounded focus:outline-none"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="confirm password"
              className="w-full p-4 bg-gray-700 rounded focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 py-2 px-8 rounded hover:bg-blue-700 transition duration-200"
            >
              register
            </button>
          </form>
          <div className="mt-4 text-center">
          <Link to="/your-route" className="button-styles">
      Go to Another Page
    </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
