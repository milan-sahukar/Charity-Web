import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12  rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-6">
        {/* Upper Footer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          
          {/* Trust Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Trust Info</h4>
            <p>Registered Under Indian Trust Act.</p>
            <p>80G Certified for Tax Exemption.</p>
            <p>NGO Darpan Registered.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition">About</Link></li>
              <li><Link to="/programs" className="hover:text-indigo-400 transition">Programs</Link></li>
              <li><Link to="/events" className="hover:text-indigo-400 transition">Events</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-indigo-400 transition">Terms & Conditions</Link></li>
              <li><Link to="/sitemap" className="hover:text-indigo-400 transition">Sitemap</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="mb-4">Get updates on our latest events, initiatives, and volunteering opportunities.</p>
            <form action="#" method="POST" className="flex space-x-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl hover:text-indigo-400 transition" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-indigo-400 transition" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl hover:text-indigo-400 transition" />
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl hover:text-indigo-400 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Lower Footer Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 border-t border-gray-700 pt-6 text-center md:text-left">
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>📍 Address: 123 Charity St, City, Country</p>
            <p>📞 Phone: +91-XXXXXXXXXX</p>
            <p>📧 Email: <a href="mailto:info@akhilektacharitabletrust.org" className="text-indigo-400 hover:text-indigo-500">info@akhilektacharitabletrust.org</a></p>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <p className="mb-4">Join our mission to make the world a better place. Become a volunteer or donate today.</p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <Link to="/volunteer" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition">Volunteer Now</Link>
              <Link to="/donate" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition">Donate</Link>
            </div>
          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center sm:justify-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
            >
              Back to Top
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            © 2025 Akhil Ekta Charitable Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
