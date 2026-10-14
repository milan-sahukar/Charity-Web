import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import contact from '../assets/contact.svg';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl font-bold text-indigo-700"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          📞 CONTACT US
        </motion.h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Reach Out to Us
        </p>
      </div>

      {/* Contact Info with SVG */}
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Address</h2>
            <p className="text-gray-700 mb-4">
              [Insert Full Address Here]
            </p>

            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Phone</h2>
            <p className="text-gray-700 mb-4">
              +91-XXXXXXXXXX
            </p>

            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Email</h2>
            <p className="text-gray-700 mb-4">
              info@akhilektacharitabletrust.org
            </p>

            <h2 className="text-xl font-semibold text-indigo-600 mb-4">Follow Us</h2>
            <div className="flex gap-4 text-2xl text-white">
              <a href="#" className="bg-blue-600 p-3 rounded-full hover:scale-110 transition"><FaFacebookF /></a>
              <a href="#" className="bg-pink-500 p-3 rounded-full hover:scale-110 transition"><FaInstagram /></a>
              <a href="#" className="bg-red-600 p-3 rounded-full hover:scale-110 transition"><FaYoutube /></a>
              <a href="#" className="bg-green-500 p-3 rounded-full hover:scale-110 transition"><FaWhatsapp /></a>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Link
                to="/contact-page"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
              >
                Go to Contact Page
              </Link>
            </div>
          </div>

          {/* Right Side - SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={contact}
              alt="Contact SVG"
              className="w-full h-auto max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
