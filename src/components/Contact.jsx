import React, { useState } from "react";
import Navbar from "./Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (you can replace this with an actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen py-16 px-6 sm:px-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h1>

        {formStatus && (
            <div
            className={`mb-4 text-center p-4 rounded-lg ${
                formStatus.includes("success") ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}
            >
            {formStatus}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 block w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="mt-2 block w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold w-full sm:w-auto hover:bg-blue-700 transition duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
         </>
  );
};

export default Contact;
