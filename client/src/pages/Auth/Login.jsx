import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
     const data= await response.json()
     localStorage.setItem("token",data.user)
    // console.log(data)
     if(data.status==="ok"){
        alert("login successfull")
        if(data.usecaseType==='Licensee'){
        navigate('/userhome')
        }
        else{
            navigate('/celebhome')
        }
     }
     else{
        alert("Failed")
     }
    } catch (error) {
     
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full p-2 bg-gray-700 border rounded text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 font-semibold">Password:</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="w-full p-2 bg-gray-700 border rounded text-white"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0e7490] text-white px-4 py-2 rounded hover:bg-[#0891b2]"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Create New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
