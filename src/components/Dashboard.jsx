// src/components/Dashboard.js
import React, { useState } from "react";
import BuyData from "./Buydata";
import Profile from "./Profile";


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("overview");

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle Navigation to Components
  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-gray-800 text-white transition-all duration-300 min-h-screen p-4`}
      >
        <div className="flex justify-between items-center">
          <h2
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } text-xl font-bold transition-all duration-300`}
          >
            Data Reseller
          </h2>
          <button
            className="text-2xl text-white"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="mt-8 space-y-6">
          <li>
            <a
              href="#"
              onClick={() => handleNavClick("overview")}
              className="flex items-center space-x-2 text-lg hover:bg-gray-700 p-2 rounded-lg"
            >
              <i className="fas fa-tachometer-alt"></i>
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavClick("profile")}
              className="flex items-center space-x-2 text-lg hover:bg-gray-700 p-2 rounded-lg"
            >
              <i className="fas fa-tachometer-alt"></i>
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavClick("buyData")}
              className="flex items-center space-x-2 text-lg hover:bg-gray-700 p-2 rounded-lg"
            >
              <i className="fas fa-cart-plus"></i>
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Buy Data</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavClick("balance")}
              className="flex items-center space-x-2 text-lg hover:bg-gray-700 p-2 rounded-lg"
            >
              <i className="fas fa-dollar-sign"></i>
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>My Balance</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleNavClick("settings")}
              className="flex items-center space-x-2 text-lg hover:bg-gray-700 p-2 rounded-lg"
            >
              <i className="fas fa-cogs"></i>
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-2 text-lg hover:bg-gray-700 p-2 rounded-lg"
            >
              <i className="fas fa-sign-out-alt"></i>
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Logout</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold">Welcome to the Data Reseller Dashboard</h1>
        <div className="mt-6">
          {activeComponent === "buyData" && <BuyData />}
          {activeComponent === "profile" && <Profile />}
         
          {/* You can conditionally render other components like this */}
          {activeComponent === "overview" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Overview</h3>
              <p className="text-gray-500 mt-2">View your sales and purchases.</p>
            </div>
          )}
          
          
          {/* You can conditionally render other components like this */}
          {activeComponent === "overview" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Overview</h3>
              <p className="text-gray-500 mt-2">View your sales and purchases.</p>
            </div>
          )}

          {activeComponent === "balance" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Balance</h3>
              <p className="text-gray-500 mt-2">Check your current balance.</p>
            </div>
          )}
          {activeComponent === "settings" && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Settings</h3>
              <p className="text-gray-500 mt-2">Manage account settings.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
