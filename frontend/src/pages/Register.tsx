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
    <div className="  min-h-screen flex flex-col md:flex-row">
      <div 
      className="flex-1 flex flex-col justify-center p-8 items-center bg-[#093f47] "
     
      >
        <h2 className="text-5xl font-bold text-white mb-10">Register Now!</h2>
        <form onSubmit={handleRegister} className="space-y-6 flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e-mail"
            className="md:w-[50vh] w-full p-2 pl-8 bg-white placeholder:text-[#093f47] font-bold rounded-full focus:outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="create password"
            className="md:w-[50vh] w-full p-2 pl-8 bg-white placeholder:text-[#093f47] font-bold rounded-full focus:outline-none"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="confirm password"
            className="md:w-[50vh] w-full p-2 pl-8 bg-white placeholder:text-[#093f47] font-bold rounded-full focus:outline-none"
          />
          <div className="flex justify-start">
            {" "}
           
            <button
              type="submit"
              style={{ marginTop: "5vh" }}
              className="py-1 px-8 bg-[#093f47] text-white rounded-full border-2 focus:outline-none text-lg"
            >
              Register
            </button>
          </div>
          <Link
          to="/login"
          style={{ marginTop: "9vh" }}
          className="text-white hover:text-blue-300 underline text-lg"
        >
          &lt; Back to login
        </Link>
        </form>
       
      </div>
      <div className="flex-1 bg-[url('src/assets/doodle.png')] bg-cover md:flex justify-center items-center bg-white hidden">
  <div className="text-center flex-col md:flex hidden ">
    <img src="src/assets/Logo.png" alt="logo" className="w-60 mb-5" />
    <img src="src/assets/text.png" alt="illustration" className="w-50 h-50" />
  </div>
</div>
    </div>
  );
};

export default Register;
