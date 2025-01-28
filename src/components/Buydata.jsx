// src/components/BuyData.js
import React from 'react';

const BuyData = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold">Buy Data</h2>
      <p className="text-gray-500 mt-2">Select a data plan to purchase:</p>
      <div className="mt-4 space-y-4">
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <h3 className="text-lg font-medium">Plan 1</h3>
            <p className="text-sm text-gray-600">1 GB of data for $5</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Buy</button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <h3 className="text-lg font-medium">Plan 2</h3>
            <p className="text-sm text-gray-600">5 GB of data for $15</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Buy</button>
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <h3 className="text-lg font-medium">Plan 3</h3>
            <p className="text-sm text-gray-600">10 GB of data for $25</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default BuyData;
