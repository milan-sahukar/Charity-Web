import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Volunteers", value: 2500 },
  { label: "Lives Touched", value: 100000 },
  { label: "Meals Served", value: 300000 },
  { label: "Health Camps", value: 75 },
];

const Counter = ({ label, value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <h3 className="text-3xl font-bold text-blue-600">{value}</h3>
      <p className="text-xl">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-orange-100 py-16">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 px-6 md:px-20">
        {stats.map((stat, index) => (
          <Counter key={index} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
