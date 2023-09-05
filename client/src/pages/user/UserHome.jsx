import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4 rounded">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/userhome" className="text-blue-500 hover:underline">
              My Projects
            </Link>
          </li>
          <li>
            <Link to="/userbrowselicense" className="text-blue-500 hover:underline">
              Browse License
            </Link>
          </li>
          <li>
            <Link to="/userprofile" className="text-blue-500 hover:underline">
              Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-900 p-8">
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
          <h2 className="text-2xl font-semibold">Licensee Section</h2>
          {/* Add your Licensee content here */}
        </div>
      </div>
    </div>
  );
};

export default UserHome;
