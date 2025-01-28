import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Hero Section with Gradient Background */}
        <div className="bg-gradient-to-r from-[#001427] to-[#708d81] text-white h-screen flex flex-col justify-center items-center px-6 sm:px-8 lg:px-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-center">
            Welcome to <span className="text-[#f4d58d]">SubXpress</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl text-center">
            Your one-stop platform to easily buy mobile data, airtime, pay bills, and subscribe to cable TV, all in one place.
          </p>
          <a
            href="/services"
            className="bg-[#f4d58d] text-[#001427] px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-[#f4d58d] hover:text-[#001427] transition duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16 sm:py-24 lg:py-32 w-full">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#001427] mb-12">
              Why Choose SubXpress?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              {['Mobile Data', 'Airtime', 'Bill Payments', 'Cable TV', 'Quick & Secure', '24/7 Support'].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#001427] text-white rounded-lg p-8 transform transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                  <p className="text-sm">
                    {feature === 'Mobile Data' && 'Recharge your phone with mobile data in an instant! Choose from a variety of plans to fit your needs.'}
                    {feature === 'Airtime' && 'Top up your airtime instantly. Recharge any network with ease and never miss a call or message.'}
                    {feature === 'Bill Payments' && 'Pay your electricity bills quickly and securely, from anywhere, with just a few taps.'}
                    {feature === 'Cable TV' && 'Subscribe to your favorite cable TV service instantly and enjoy entertainment at your fingertips.'}
                    {feature === 'Quick & Secure' && 'All transactions are encrypted and secure, ensuring a safe and fast experience every time.'}
                    {feature === '24/7 Support' && 'Get 24/7 customer support whenever you need help. We’re always here to assist you.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-[#f4d58d] py-16 sm:py-24 lg:py-32 w-full">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#001427] mb-12">
              What Our Customers Are Saying
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-x-8">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm transform transition-transform duration-300 hover:scale-105">
                <p className="text-gray-700 mb-4">
                  "SubXpress has completely changed how I recharge and pay bills. It's fast, simple, and reliable!"
                </p>
                <p className="font-semibold">Jane Doe</p>
                <p className="text-gray-500">Happy Customer</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mt-8 sm:mt-0 transform transition-transform duration-300 hover:scale-105">
                <p className="text-gray-700 mb-4">
                  "I love how easy it is to subscribe to cable TV! It's like having everything I need in one app."
                </p>
                <p className="font-semibold">John Smith</p>
                <p className="text-gray-500">Satisfied User</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-gradient-to-r from-[#001427] to-[#708d81] text-white py-16 sm:py-24 lg:py-32 w-full">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who are enjoying seamless, convenient, and secure transactions on SubXpress.
            </p>
            <a
              href="/sign-up"
              className="bg-[#f4d58d] text-[#001427] px-8 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-[#f4d58d] hover:text-[#001427] transition duration-300 transform hover:scale-105"
            >
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
