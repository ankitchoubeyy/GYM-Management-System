import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-18">
        {/* Contact Page Heading */}
        <h1 className="text-5xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-zinc-700 text-center mb-12 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our gym, classes, or membership, feel free to reach out to us.
        </p>

        {/* Contact Details and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-2xl text-teal-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Our Location</h3>
                  <p className="text-zinc-700">
                    Sector 49, Hindon Vihar, Gali No. 17, Noida, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <FaPhone className="text-2xl text-teal-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Call Us</h3>
                  <p className="text-zinc-700">+91 9958354435</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <FaEnvelope className="text-2xl text-teal-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Email Us</h3>
                  <p className="text-zinc-700">info@ufcgym.com</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start">
                <FaClock className="text-2xl text-teal-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Opening Hours</h3>
                  <p className="text-zinc-700">
                    Mon - Sat: 6:00 AM - 10:00 PM <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-lg font-medium text-zinc-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-lg font-medium text-zinc-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-lg font-medium text-zinc-700 mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="How can we help you?"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Gym Location Map */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Find Us on the Map</h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe
              title="Gym Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.360618628237!2d77.37278817463108!3d28.55893198742071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f7760341bd%3A0x1abfe779998eeb5!2sMH%20FITNESS%20GYM!5e0!3m2!1sen!2sin!4v1740648897986!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;