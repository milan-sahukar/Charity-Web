import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: "2010", event: "Akhil Ekta Charitable Trust was founded." },
  { year: "2012", event: "First Health Camp organized." },
  { year: "2015", event: "Started Food Distribution Program." },
  { year: "2018", event: "Launched Skill Development Workshops." },
  { year: "2021", event: "Crossed 100,000 lives touched." },
];

const TimelineItem = ({ year, event }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="mb-6"
  >
    <div className="flex items-center space-x-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center"
      >
        <span className="text-sm">{year}</span>
      </motion.div>
      <div>
        <p className="text-xl font-semibold">{event}</p>
      </div>
    </div>
  </motion.div>
);

const TimelineSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-orange-100">
      <h2 className="text-center text-3xl font-bold mb-12">Our Journey</h2>
      <div className="container mx-auto  px-6 md:px-20">
        {timeline.map((item, index) => (
          <TimelineItem key={index} year={item.year} event={item.event}  />
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
