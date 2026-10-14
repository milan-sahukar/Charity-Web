import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaUtensils,
  FaHeartbeat,
  FaTools,
  FaChild,
  FaFemale,
} from "react-icons/fa";

const programmes = [
  {
    title: "Education for All",
    category: "Education",
    icon: <FaBookOpen size={30} />,
    description:
      "Providing quality education to underprivileged children to unlock brighter futures.",
  },
  {
    title: "Food Distribution",
    category: "Hunger",
    icon: <FaUtensils size={30} />,
    description:
      "Distributing nutritious meals to families in need, ensuring no one sleeps hungry.",
  },
  {
    title: "Health Camps",
    category: "Health",
    icon: <FaHeartbeat size={30} />,
    description:
      "Organizing free medical check-ups and healthcare awareness drives in rural areas.",
  },
  {
    title: "Skill Development",
    category: "Empowerment",
    icon: <FaTools size={30} />,
    description:
      "Empowering youth and women with vocational training for sustainable livelihoods.",
  },
  {
    title: "Child Welfare",
    category: "Children",
    icon: <FaChild size={30} />,
    description:
      "Promoting safety, education, and holistic growth for children in vulnerable situations.",
  },
  {
    title: "Women Empowerment",
    category: "Empowerment",
    icon: <FaFemale size={30} />,
    description:
      "Creating opportunities for women to thrive through education, rights awareness, and support.",
  },
];

const Programmes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProgrammes =
    selectedCategory === "All"
      ? programmes
      : programmes.filter((prog) => prog.category === selectedCategory);

  const categories = ["All", "Education", "Hunger", "Health", "Empowerment", "Children"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      {/* Hero Banner */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/assets/programmes-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-orange-100 z-0" />
        <div className="relative z-10 text-center text-gray-950 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our Programmes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 max-w-2xl mx-auto text-lg"
          >
            Empowering lives through compassion and action — explore our initiatives that spark real change.
          </motion.p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="text-center mt-10 px-4">
        <h2 className="text-2xl font-semibold text-orange-600 mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-white text-orange-600 border-orange-300"
              } hover:bg-orange-600 hover:text-white transition`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Programme Cards */}
      <div className="px-6 md:px-16 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProgrammes.map((prog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="text-orange-500 mb-4">{prog.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {prog.title}
              </h3>
              <p className="text-gray-600">{prog.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programmes;
