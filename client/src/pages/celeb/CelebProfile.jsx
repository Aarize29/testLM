import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaCloudUploadAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CelebProfile = () => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [file, setFile] = useState(null);

  // Fetch user data from the backend when the component mounts
  const getUser = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/auth/userdetail`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setUserData(data.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
    // Initialize editedData with current user data
    setEditedData(userData);
  };

  const handleSaveClick = async () => {
    // Send editedData to the backend to update the user's profile
    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/auth/updateprofile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editedData),
    });

    if (response.ok) {
      // If the update is successful, update the userData and exit editing mode
      setUserData(editedData);
      setIsEditing(false);
    } else {
      // Handle error here
      console.error('Profile update failed.');
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUploadClick = async () => {
    // Upload the selected file to the server (you may need to implement this endpoint on the backend)
    const formData = new FormData();
    formData.append('file', file);

    const token = localStorage.getItem('token');
    const response = await fetch(`http://localhost:3000/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      // File upload successful, handle the response from the server
      // You can update the user's profile with the uploaded file information
    } else {
      // Handle error here
      console.error('File upload failed.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 dark:bg-gray-800 dark:text-gray-100 flex">
 <div className="w-1/4 bg-gray-800 p-4 rounded">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/celebhome" className="text-blue-500 hover:underline">
              Request
            </Link>
          </li>
          <li>
            <Link to="/celebprofile" className="text-blue-500 hover:underline">
              Profile
            </Link>
          </li>
        </ul>
      </div>
        
        {/* Main Content */}
        <div className="lg:w-3/4 bg-gray-900 p-8">
          <h1 className="text-3xl font-bold mb-4">Celeb Profile</h1>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-500 text-lg">Name:</div>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editedData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-blue-600 rounded-lg focus:outline-none dark:bg-gray-700 dark:border-blue-600 dark:text-gray-100"
                />
              ) : (
                <div className="text-lg font-medium">{userData.name}</div>
              )}

              <div className="text-gray-500 text-lg">Profession:</div>
              {isEditing ? (
                <input
                  type="text"
                  name="profession"
                  value={editedData.profession}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-blue-600 rounded-lg focus:outline-none dark:bg-gray-700 dark:border-blue-600 dark:text-gray-100"
                />
              ) : (
                <div className="text-lg font-medium">{userData.profession}</div>
              )}

              {/* File Upload */}
              <div className="text-gray-500 text-lg">Upload your base audio:</div>
              {isEditing ? (
                <div className="flex items-center">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-700"
                  >
                    <FaCloudUploadAlt /> Upload
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    accept=".mp3"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
              ) : (
                <div className="text-lg font-medium">No file uploaded</div>
              )}
            </div>

            {/* Display additional user information fields here */}
            <div className="space-x-2 flex">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSaveClick}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2"
                  >
                    <FaPencilAlt /> Save
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEditClick}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2"
                >
                  <FaPencilAlt /> Edit
                </button>
              )}
            </div>
          </div>
        </div>
    </div>
  );
};

export default CelebProfile;
