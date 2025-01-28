import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123 456 7890",
    address: "123 Main St, City, Country",
  });

  // Handle input change for editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6">User Profile</h2>

      {/* Profile Picture Section */}
      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex justify-center items-center text-white text-xl font-semibold mb-4 md:mb-0">
          <span>JD</span> {/* You can replace this with an actual profile image */}
        </div>
        <div className="ml-0 md:ml-6 text-center md:text-left">
          <p className="text-lg font-semibold">John Doe</p>
          <button
            className="text-blue-600 hover:text-blue-800 mt-2"
            onClick={toggleEdit}
          >
            {isEditing ? "Save" : "Edit Profile"}
          </button>
        </div>
      </div>

      {/* Profile Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
          {isEditing ? (
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          ) : (
            <p className="text-gray-600">{userInfo.name}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
          {isEditing ? (
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          ) : (
            <p className="text-gray-600">{userInfo.email}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-gray-700 mb-2">Phone</label>
          {isEditing ? (
            <input
              type="text"
              id="phone"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          ) : (
            <p className="text-gray-600">{userInfo.phone}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="text-gray-700 mb-2">Address</label>
          {isEditing ? (
            <textarea
              id="address"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          ) : (
            <p className="text-gray-600">{userInfo.address}</p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4">
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4 sm:mb-0"
          onClick={() => alert("Password Change Modal Here!")}
        >
          <i className="fas fa-key mr-2"></i> Change Password
        </button>

        {/* Additional action buttons can go here */}
      </div>
    </div>
  );
};

export default Profile;
