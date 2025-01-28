import React from "react";

const Userdashboard = () => {
  const userData = {
    fullName: "John Doe",
    walletBalance: "$150.00",
    phoneNumber: "+123 456 7890",
    accountNumber: "9876543210",
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 p-6 flex justify-center items-center">
      {/* Main Container: Full width on all screens */}
      <div className="bg-white shadow-lg rounded-lg w-full max-w-none p-6 md:p-10">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">User Dashboard</h2>

        {/* User Info Cards */}
        <div className="space-y-6">
          {/* Full Name */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-700">Full Name</h3>
            <p className="text-gray-500">{userData.fullName}</p>
          </div>

          {/* Wallet Balance */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-700">Wallet Balance</h3>
            <p className="text-green-500 font-semibold">{userData.walletBalance}</p>
          </div>

          {/* Phone Number */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-700">Phone Number</h3>
            <p className="text-gray-500">{userData.phoneNumber}</p>
          </div>

          {/* Account Number */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-700">Account Number</h3>
            <p className="text-gray-500">{userData.accountNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;
