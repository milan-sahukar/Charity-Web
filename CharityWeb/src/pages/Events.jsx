import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const events = [
  {
    title: 'Republic Day Food and Water Distribution',
    image: 'https://picsum.photos/600/400?random=1',
  },
  {
    title: 'Independence Day Flag Hoisting & Awareness Walk',
    image: 'https://picsum.photos/600/400?random=2',
  },
  {
    title: 'Diwali Donation Drive',
    image: 'https://picsum.photos/600/400?random=3',
  },
  {
    title: 'Monthly Health Check-up Camps',
    image: 'https://picsum.photos/600/400?random=4',
  },
];

const Events = () => {
  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-[#f7f7f7] to-[#d8dbbf] text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🎊 EVENTS (Highlights)
        </motion.h2>

        <motion.p
          className="text-lg text-center text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Recent Events & Celebrations
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-yellow-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <Link
                  to="/gallery"
                  className="inline-block mt-4 px-4 py-2 bg-yellow-200 text-black rounded hover:bg-black hover:text-black transition"
                >
                  <p className=' hover:text-white'>View Photos</p>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
