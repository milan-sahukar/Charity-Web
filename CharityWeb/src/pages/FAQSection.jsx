import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is Akhil Ekta Charitable Trust’s mission?",
    answer: "Our mission is to uplift underprivileged communities through education, healthcare, nutrition, and skill-building initiatives.",
  },
  {
    question: "How can I volunteer?",
    answer: "Click on 'Join as a Volunteer' and fill out the form. Our team will reach out to onboard you with current opportunities.",
  },
  {
    question: "Where does your funding come from?",
    answer: "We rely on donations from kind-hearted individuals, CSR funds from companies, and community-driven initiatives.",
  },
  {
    question: "Are donations tax exempt?",
    answer: "Yes, all donations are eligible for tax exemption under Section 80G of the Income Tax Act in India.",
  },
];

const AccordionItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-300 py-4">
    <button
      className="w-full text-left flex justify-between items-center"
      onClick={onClick}
    >
      <span className="text-lg font-medium">{faq.question}</span>
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-bold"
      >
        +
      </motion.span>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
          className="text-gray-700 mt-2 overflow-hidden"
        >
          <p>{faq.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-orange-50 to-orange-100 px-6 md:px-20 py-12 text-gray-800">
      <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Frequently Asked Questions</h3>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => toggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
