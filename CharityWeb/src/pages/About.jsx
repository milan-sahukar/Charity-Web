import React, { useState } from 'react';
import { motion } from 'framer-motion';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import StatsSection from './StatsSection';  // Don't forget to import
import TimelineSection from './TimelineSection';  // Don't forget to import

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <section className="w-full bg-gradient-to-b from-orange-50 to-orange-100 py-16 px-6 md:px-20 text-gray-800">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Akhil Ekta Charitable Trust is a registered non-profit organization working tirelessly for the
            upliftment of marginalized communities. We believe in unity, inclusiveness, and equal
            opportunity for all.
            {showMore && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="block mt-4"
              >
                From education and healthcare to food and skill development, we drive change where it’s
                needed most. Our vision is to build a society where no one is left behind — and every act
                of kindness contributes to a brighter tomorrow.
              </motion.span>
            )}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMore(!showMore)}
            className="mt-6 text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition duration-300 shadow-md"
          >
            {showMore ? 'Show Less' : 'Read More'}
          </motion.button>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[about1, about2, about3].map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, delay: 0.2 * index },
                },
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Timeline Section */}
      <TimelineSection />
    </div>
  );
};

export default AboutUs;
