import React, { useState } from "react";

const Settings = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notificationPreferences, setNotificationPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prevPassword) => ({
      ...prevPassword,
      [name]: value,
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationPreferences((prevPrefs) => ({
      ...prevPrefs,
      [name]: checked,
    }));
  };

  const handleSaveSettings = () => {
    alert("Settings have been saved successfully!");
    // Here you can integrate with your backend API to save the settings.
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>

      {/* Personal Information Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleUserInfoChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleUserInfoChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Password Settings Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Password Settings</h3>
        <div className="flex flex-col mb-4">
          <label htmlFor="currentPassword" className="text-gray-700 mb-2">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={password.currentPassword}
            onChange={handlePasswordChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="newPassword" className="text-gray-700 mb-2">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={password.newPassword}
            onChange={handlePasswordChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label htmlFor="confirmPassword" className="text-gray-700 mb-2">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={password.confirmPassword}
            onChange={handlePasswordChange}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Notification Preferences Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="emailNotifications"
            name="emailNotifications"
            checked={notificationPreferences.emailNotifications}
            onChange={handleNotificationChange}
            className="mr-2"
          />
          <label htmlFor="emailNotifications" className="text-gray-700">Email Notifications</label>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="smsNotifications"
            name="smsNotifications"
            checked={notificationPreferences.smsNotifications}
            onChange={handleNotificationChange}
            className="mr-2"
          />
          <label htmlFor="smsNotifications" className="text-gray-700">SMS Notifications</label>
        </div>
      </div>

      {/* Privacy Settings Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Privacy Settings</h3>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="publicProfile"
            name="publicProfile"
            className="mr-2"
          />
          <label htmlFor="publicProfile" className="text-gray-700">Make Profile Public</label>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="dataSharing"
            name="dataSharing"
            className="mr-2"
          />
          <label htmlFor="dataSharing" className="text-gray-700">Allow Data Sharing</label>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-8 text-center">
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={handleSaveSettings}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
