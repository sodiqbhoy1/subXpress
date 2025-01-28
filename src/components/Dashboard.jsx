import React, { useState } from "react";
import BuyData from "./BuyData";
import Profile from "./Profile";
import Userdashboard from "./Userdashboard";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("overview");

  // Handle Navigation to Components
  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="bg-gray-800 text-white py-3 px-4">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => handleNavClick("dashboard")}
            className="text-lg hover:bg-gray-700 px-4 py-2 rounded-lg whitespace-nowrap"
          >
            Dashboard
          </button>
          <button
            onClick={() => handleNavClick("profile")}
            className="text-lg hover:bg-gray-700 px-4 py-2 rounded-lg whitespace-nowrap"
          >
            Profile
          </button>
          <button
            onClick={() => handleNavClick("buyData")}
            className="text-lg hover:bg-gray-700 px-4 py-2 rounded-lg whitespace-nowrap"
          >
            Buy Data
          </button>
          <button
            onClick={() => handleNavClick("balance")}
            className="text-lg hover:bg-gray-700 px-4 py-2 rounded-lg whitespace-nowrap"
          >
            My Balance
          </button>
          <button
            onClick={() => handleNavClick("settings")}
            className="text-lg hover:bg-gray-700 px-4 py-2 rounded-lg whitespace-nowrap"
          >
            Settings
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <h1 className="text-2xl font-semibold">Welcome to the Data Reseller Dashboard</h1>
        <div className="mt-6">
          {activeComponent === "dashboard" && <Userdashboard/>}
          {activeComponent === "buyData" && <BuyData />}
          {activeComponent === "profile" && <Profile />}
         
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
