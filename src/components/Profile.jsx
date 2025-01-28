// src/components/Profile.js
import React from "react";

const Profile = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

      <div className="flex items-center space-x-6 mb-8">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-medium">John Doe</h3>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Username</span>
          <span className="text-gray-500">johndoe123</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Phone Number</span>
          <span className="text-gray-500">+1 234 567 890</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">Address</span>
          <span className="text-gray-500">123 Main St, Springfield, IL</span>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
