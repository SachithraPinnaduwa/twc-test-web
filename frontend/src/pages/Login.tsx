import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      const response = await axios.post('http://localhost:3000/checkuser', { email, password });
      if (response.data !== null) {  
        console.log('User logged in:', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/');
      } else {
        console.log('Login failed:', response.data);
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error : any) {
      if (error.response && error.response.status === 400) {
        console.error('Login error:', error.response.data);
      } else {
        console.error('Server error:', error.message);
      }
    }
  };
  return (
    <div className="bg-[url('src/assets/contacts.png')] bg-cover bg-center min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col justify-center p-8 items-center bg-[#093f47]">
       
        <div className="flex flex-col justify-center  text-white p-8">
          <h2 className="text-5xl font-bold mb-4">Hi there,</h2>
          <h3 className="text-3xl mb-8">Welcome to our contacts portal</h3>
          <form onSubmit={handleLogin} className="space-y-6 mt-4 flex flex-col">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e-mail"
              className="md:w-[50vh] w-full p-2 pl-8 bg-white text-black  placeholder:text-[#093f47] font-bold rounded-full focus:outline-none"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="md:w-[50vh] w-full p-2 pl-8 bg-white text-black  placeholder:text-[#093f47] font-bold rounded-full focus:outline-none"
            />
            <div>
            <div className='flex flex-col md:flex-row items-center md:items-start mt-10'>
  <button
    type="submit"
    className="py-1 px-8 bg-[#093f47] text-white rounded-full border-2 focus:outline-none mr-4 text-lg w-auto my-2 md:my-0"
  >
    login
  </button>
  <Link to="/register" className="text-white hover:text-blue-400 text-lg my-2 md:my-0">
    or <span className='underline'>Click here to Register</span>
  </Link>
</div>

            </div>
          </form>
        </div>
   
      </div>
      <div className="flex-1 bg-[url('src/assets/doodle.png')] bg-cover md:flex justify-center items-center bg-white hidden ">
      <div className="text-center flex-col flex">
          <img src="src/assets/Logo.png" alt="logo" className="w-60 mb-5" />
          <img src="src/assets/text.png" alt="illustration" className="w-50 h-50" />
        </div>
        </div>
    </div>
  );
};

export default Login;
