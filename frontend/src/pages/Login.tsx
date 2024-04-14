import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Try to log in the user
      const response = await axios.post('http://localhost:3000/checkuser', { email, password });
      if (response.data !== null) {  
        console.log('User logged in:', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/');
      } else {
        console.log('Login failed:', response.data);
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.error('Login error:', error.response.data);
      } else {
        console.error('Server error:', error.message);
      }
    }
  };
  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="flex  mx-auto">
       
        <div className="flex flex-col justify-center  text-white p-8 max-w-md">
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
            <button
              type="submit"
              className="bg-blue-600 py-2 px-8 rounded hover:bg-blue-700 transition duration-200 mr-4 inline-block"
            >
              login
            </button>
            <Link to="/register" className="text-blue-600 hover:text-blue-400 inline-block">
              or Click here to Register
            </Link>
          </form>
        </div>
    <div className=''>
        <svg viewBox="0 0 200 200" width="400" height="400">
          <circle
            cx="100"
            cy="100"
            fill="yellow"
            r="78"
            stroke="black"
            strokeWidth="3"
          />
          <g className="eyes">
            <circle cx="61" cy="82" r="12" />
            <circle cx="127" cy="82" r="12" />
          </g>
          <path
            d="m136.81 116.53c.69 26.17-64.11 42-81.52-.73"
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
        </div>
      </div>
    </div>
  );
};

export default Login;
