import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    usecaseType: '',
    profession: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if(formData.password.length>=6){
        const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
     const data= await response.json()
     console.log(data)
     if(data.status==='ok'){
        alert("Registered Successfully")
        navigate('/login')
     }
      }
      else{
        alert("Password should contains atleast 6 character")
      }
    } catch (error) {
     
      console.error('An error occurred:', error);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full p-2 bg-gray-700 border rounded text-white"
              required
            />
          </div>
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
            <p>Password atleast contains 6 characters</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 font-semibold">You want to be:</label>
            <select
              name="usecaseType"
              onChange={handleChange}
              value={formData.usecaseType}
              className="w-full p-2 bg-gray-700 border rounded text-white"
              required
            >
              <option value="">Select</option>
              <option value="Licensee">Licensee</option>
              <option value="Licensor">Licensor</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 font-semibold">Profession:</label>
            <input
              type="text"
              name="profession"
              onChange={handleChange}
              value={formData.profession}
              className="w-full p-2 bg-gray-700 border rounded text-white"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0e7490] text-white px-4 py-2 rounded hover:bg-[#0891b2]"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
