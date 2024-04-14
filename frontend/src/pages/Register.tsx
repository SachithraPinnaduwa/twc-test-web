import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/users", {
        email,
        password,
      });
      if (response.status === 201) {
        console.log("User registered:", response.data);
        navigate("/"); // Redirect to the home page or dashboard after registration
      }
    } catch (error) {
      console.error(
        "Registration error:",
        error.response ? error.response.data : "Unknown error"
      );
      alert(
        "Failed to register: " +
          (error.response ? error.response.data : "Unknown error")
      );
    }
  };

  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <div className="flex mx-auto">
        {/* Registration Form */}
        <div className="flex-grow  text-white max-w-md ">
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
              className="bg-blue-600 py-2 px-8 rounded hover:bg-blue-700 transition duration-200 inline-block"
            >
              Register
            </button>
          </form>
          <div className="mt-6">
            <Link to="/login" className="text-blue-500 hover:text-blue-300">
            <p  >
              &lt; Back to login
            </p>
            </Link>
          </div>
        </div>

       <div>
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

export default Register;
