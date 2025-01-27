import React, { useState } from "react";
import { Link, Route, Routes } from "react-router"; // Make sure you import from react-router-dom instead of react-router
import Profile from "./Profile";
import Settings from "./Settings";
import Messages from "./Messages";
import { Navigate } from "react-router";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState("profile"); // Default active link is "profile"

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white h-full p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
          {/* dashboard Link */}
          <li className="mb-4">
            <Link
              to="/dashboard/profile"
              onClick={() => handleLinkClick("dashboard")}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-blue-500 ${
                activeLink === "profile" ? "bg-blue-700" : ""
              }`}
            >
              <i className="fas fa-user mr-3"></i> {/* FontAwesome icon for Profile */}
              Profile
            </Link>
          </li>
          {/* Profile Link */}
          <li className="mb-4">
            <Link
              to="/dashboard/profile"
              onClick={() => handleLinkClick("profile")}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-blue-500 ${
                activeLink === "profile" ? "bg-blue-700" : ""
              }`}
            >
              <i className="fas fa-user mr-3"></i> {/* FontAwesome icon for Profile */}
              Profile
            </Link>
          </li>

          {/* Settings Link */}
          <li className="mb-4">
            <Link
              to="/dashboard/settings"
              onClick={() => handleLinkClick("settings")}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-blue-500 ${
                activeLink === "settings" ? "bg-blue-700" : ""
              }`}
            >
              <i className="fas fa-cog mr-3"></i> {/* FontAwesome icon for Settings */}
              Settings
            </Link>
          </li>

          {/* Messages Link */}
          <li className="mb-4">
            <Link
              to="/dashboard/messages"
              onClick={() => handleLinkClick("messages")}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-blue-500 ${
                activeLink === "messages" ? "bg-blue-700" : ""
              }`}
            >
              <i className="fas fa-envelope mr-3"></i> {/* FontAwesome icon for Messages */}
              Messages
            </Link>
          </li>

          {/* Logout Link */}
          <li className="mt-6">
            <Link
              to="/login" // Assuming you have a login route set up for logout
              className="w-full text-left py-2 px-4 rounded-lg hover:bg-blue-500"
            >
              <i className="fas fa-sign-out-alt mr-3"></i> {/* FontAwesome icon for Logout */}
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/profile" />} /> {/* Redirect to profile by default */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="messages" element={<Messages />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;