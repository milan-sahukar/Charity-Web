import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    title: 'Community Events',
    description: 'Celebrating unity in the community through various events and programs.',
    imageUrl: 'https://picsum.photos/600/800?random=1',
  },
  {
    id: 2,
    title: 'School Kit Distribution',
    description: 'Providing school kits to underprivileged children to support their education.',
    imageUrl: 'https://picsum.photos/600/800?random=2',
  },
  {
    id: 3,
    title: 'Food Drives',
    description: 'Distributing food to those in need in various parts of the country.',
    imageUrl: 'https://picsum.photos/600/800?random=3',
  },
  {
    id: 4,
    title: 'National Holiday Celebrations',
    description: 'Commemorating national holidays with special events for the community.',
    imageUrl: 'https://picsum.photos/600/800?random=4',
  },
  {
    id: 5,
    title: 'National Holiday Celebrations',
    description: 'Commemorating national holidays with special events for the community.',
    imageUrl: 'https://picsum.photos/600/800?random=5',
  },
  {
    id: 6,
    title: 'National Holiday Celebrations',
    description: 'Commemorating national holidays with special events for the community.',
    imageUrl: 'https://picsum.photos/600/800?random=6',
  },
  {
    id: 7,
    title: 'National Holiday Celebrations',
    description: 'Commemorating national holidays with special events for the community.',
    imageUrl: 'https://picsum.photos/600/800?random=7',
  },
  {
    id: 8,
    title: 'National Holiday Celebrations',
    description: 'Commemorating national holidays with special events for the community.',
    imageUrl: 'https://picsum.photos/600/800?random=8',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-12">Snapshots of Change</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map(item => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform group-hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
              />
              <div className="absolute inset-0  bg-transparent backdrop-blur-sm bg-opacity-50 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
