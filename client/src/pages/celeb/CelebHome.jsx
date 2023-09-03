import React from 'react';
import { useNavigate } from 'react-router-dom';
const CelebHome = () => {
    const navigate=useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/')
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Licensee Page</h1>
          <button
            onClick={handleLogout}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Logout
          </button>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          {/* Content for Licensee */}
          <h2 className="text-2xl font-semibold">Licensee Section</h2>
          {/* Add Licensee-specific content here */}
        </div>
      </div>
    </div>
  );
};

export default CelebHome;
