import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: 'Ananya Sharma',
    review: 'Volunteering here changed my perspective on life.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
  },
  {
    name: 'Ravi Verma',
    review: 'A humbling experience. The smiles we spread are priceless.',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
    rating: 4,
  },
  {
    name: 'Priya Mehta',
    review: 'From events to tutoring – every moment is special!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
];

const Volunteer = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h1 className="text-4xl font-bold text-indigo-700" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          🙋 VOLUNTEER
        </motion.h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Join our community of changemakers dedicating time and love to serve society.
        </p>
      </div>

      {/* Why Volunteer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { icon: '🤝', title: 'Serve the Community', desc: 'Make real impact.' },
          { icon: '📚', title: 'Learn & Grow', desc: 'Build life skills.' },
          { icon: '😊', title: 'Spread Smiles', desc: 'See lives change.' },
        ].map((card, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg text-center shadow-md">
            <div className="text-4xl">{card.icon}</div>
            <h3 className="text-xl font-bold text-indigo-600 mt-3">{card.title}</h3>
            <p className="text-gray-600 mt-2">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-10 text-center mb-20 flex-wrap">
        {[
          { number: '150+', label: 'Volunteers' },
          { number: '75+', label: 'Events Completed' },
          { number: '10K+', label: 'Smiles Spread' },
        ].map((stat, i) => (
          <div key={i}>
            <motion.h2 className="text-4xl font-extrabold text-indigo-700" whileInView={{ scale: [0.8, 1] }}>
              {stat.number}
            </motion.h2>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">🌟 Volunteer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {reviews.map((r, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full mr-3" />
              <div>
                <h4 className="font-bold">{r.name}</h4>
                <div className="text-yellow-500 text-sm">{'⭐'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
              </div>
            </div>
            <p className="text-gray-600 italic">“{r.review}”</p>
          </motion.div>
        ))}
      </div>

      {/* Google Map */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">📍 Activity Locations</h2>
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Map"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.910841365924!2d75.79424447520941!3d26.849695376705812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6b4579f9c75%3A0x86f7300b445d1744!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1660924947897!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 items-center flex-wrap">
        <Link to="/volunteer-form" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
          Join Now
        </Link>
        <a
          href="https://wa.me/7735599567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition"
        >
          📱 WhatsApp Us
        </a>
      </div>
    </section>
  );
};

export default Volunteer;
