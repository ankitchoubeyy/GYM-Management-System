import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-500 uppercase">mh fitness</h2>
        <p className="my-2 mx-4 mt-4">
          Join us today and experience the transformative power of our fitness classes. Don't wait to start your fitness journey. Take the first step towards a healthier, stronger you. Let's sweat, have fun, and make fitness a way of life together!
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-500">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-500">
            <FaInstagram size={24} />
          </a>
        </div>
        <hr className='my-6' />
        <p className="mt-6 text-sm">© MH FITNESS {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
