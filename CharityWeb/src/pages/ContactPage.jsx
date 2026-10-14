import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-700 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in Touch With Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.form
            className="bg-gray-50 p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 font-semibold">Message</label>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="text-gray-800 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-indigo-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p>[Insert Full Address Here]</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-indigo-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p>+91-XXXXXXXXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-indigo-600 mt-1" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p>info@akhilektacharitabletrust.org</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
