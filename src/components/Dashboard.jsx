import React, { useState } from "react";
import { Link, Routes, Route, Navigate } from "react-router"; // Using react-router-dom
import Profile from "./Profile";
import Settings from "./Settings";
import Messages from "./Messages";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState("profile"); // Default active link is "profile"
  const [collapsed, setCollapsed] = useState(false); // Sidebar collapse state

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the active link based on the clicked item
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed); // Toggle sidebar visibility
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          collapsed ? "w-20" : "w-64"
        } bg-[#001427] text-white h-full p-6 transition-all duration-300 fixed md:relative z-10 md:z-auto`}
      >
        {/* Sidebar Toggle Button */}
        <button
          className="md:hidden text-white mb-4"
          onClick={toggleSidebar}
        >
          <i className={`fas ${collapsed ? "fa-bars" : "fa-times"} text-2xl`}></i>
        </button>

        {/* Logo */}
        {!collapsed && (
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        )}

        {/* Links */}
        <ul>
          {/* Dashboard Link */}
          <li className="mb-4">
            <Link
              to="/dashboard/profile"
              onClick={() => handleLinkClick("profile")}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-[#708d81] ${
                activeLink === "profile" ? "bg-[#708d81]" : ""
              }`}
            >
              <i className="fas fa-user mr-3"></i>
              {!collapsed && "Profile"}
            </Link>
          </li>

          {/* Settings Link */}
          <li className="mb-4">
            <Link
              to="/dashboard/settings"
              onClick={() => handleLinkClick("settings")}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-[#708d81] ${
                activeLink === "settings" ? "bg-[#708d81]" : ""
              }`}
            >
              <i className="fas fa-cog mr-3"></i>
              {!collapsed && "Settings"}
            </Link>
          </li>

          {/* Messages Link */}
          <li className="mb-4">
            <Link
              to="/dashboard/messages"
              onClick={() => handleLinkClick("messages")}
              className={`w-full text-left py-2 px-4 rounded-lg hover:bg-[#708d81] ${
                activeLink === "messages" ? "bg-[#708d81]" : ""
              }`}
            >
              <i className="fas fa-envelope mr-3"></i>
              {!collapsed && "Messages"}
            </Link>
          </li>

          {/* Logout Link */}
          <li className="mt-6">
            <Link
              to="/signin" // Assuming you have a login route set up for logout
              className="w-full text-left py-2 px-4 rounded-lg hover:bg-[#708d81]"
            >
              <i className="fas fa-sign-out-alt mr-3"></i>
              {!collapsed && "Logout"}
            </Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div
        className={`flex-1 p-6 bg-[#f4d58d] min-h-screen overflow-y-auto ${
          collapsed ? "ml-20" : "ml-64"
        } transition-all duration-300`}
      >
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/profile" />} /> {/* Redirect to profile by default */}
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="messages" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
