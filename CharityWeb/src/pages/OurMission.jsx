import React from 'react';
import { motion } from 'framer-motion';
import { GiHeartPlus, GiTargetPrize, GiProgression } from 'react-icons/gi';

const OurMission = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 py-20 px-6 md:px-16 min-h-screen">
      {/* Mission Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">🌟 Our Mission</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          “To create a just and compassionate society where every person has access to education, healthcare, and opportunities for a better life.”
        </p>
      </motion.div>

      {/* Vision + Core Values Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg p-8 rounded-xl"
        >
          <div className="flex items-center gap-4 mb-4 text-orange-500">
            <GiTargetPrize size={30} />
            <h3 className="text-2xl font-semibold">Our Vision</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We envision an India where poverty is reduced, children are educated, women are empowered, and humanity thrives in unity.
          </p>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg p-8 rounded-xl"
        >
          <div className="flex items-center gap-4 mb-4 text-orange-500">
            <GiHeartPlus size={30} />
            <h3 className="text-2xl font-semibold">Our Core Values</h3>
          </div>
          <ul className="space-y-3 flex gap-8 text-gray-700 pl-4 list-none">
            <li>✅ Equality</li>
            <li>✅ Empathy</li>
            <li>✅ Integrity</li>
            <li>✅ Inclusion</li>
            <li>✅ Service</li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Impact Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mt-20 text-gray-600"
      >
        <GiProgression size={40} className="mx-auto text-orange-500 mb-3" />
        <p className="text-xl font-medium">Together, we rise by lifting others.</p>
      </motion.div>
    </div>
  );
};

export default OurMission;
