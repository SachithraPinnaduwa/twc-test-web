import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic
    console.log('Logging in with:', email, password);
    navigate('/'); 
  };

  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="max-w-lg w-full">
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Hi there,</h2>
          <h3 className="text-xl mb-8">Welcome to our contacts portal</h3>
          <form onSubmit={handleLogin} className="space-y-6">
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
              placeholder="password"
              className="w-full p-4 bg-gray-700 rounded focus:outline-none"
            />
            <div className="flex items-center justify-between">
              <button
                type="submit"
               
                className="bg-blue-600 py-2 px-8 rounded hover:bg-blue-700 transition duration-200"
              >
                login
              </button>
              <span className="text-gray-400 cursor-pointer hover:text-gray-300">
                or Click here to Register
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
