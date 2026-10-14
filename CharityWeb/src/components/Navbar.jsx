// import React, { useState } from 'react';
// import { Home, Info, Target, BookOpen, Image, Calendar, HandHeart, Mail, ArrowUp } from 'lucide-react';
// import logo from '../assets/logo.png';

// const navItems = [
//   { label: 'Home', icon: <Home size={20} />, href: 'home' },
//   { label: 'About Us', icon: <Info size={20} />, href: 'about' },
//   { label: 'Our Mission', icon: <Target size={20} />, href: 'mission' },
//   { label: 'Programmes', icon: <BookOpen size={20} />, href: 'programmes' },
//   { label: 'Gallery', icon: <Image size={20} />, href: 'gallery' },
//   { label: 'Events', icon: <Calendar size={20} />, href: 'events' },
//   { label: 'Volunteer', icon: <HandHeart size={20} />, href: 'volunteer' },
//   { label: 'Contact Us', icon: <Mail size={20} />, href: 'contact' },
// ];

// const Navbar = () => {
//   const [active, setActive] = useState('Home');

//   const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//       setActive(id.charAt(0).toUpperCase() + id.slice(1));
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     setActive('Home');
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black shadow-md transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         <div className="text-xl font-bold text-white cursor-pointer" onClick={scrollToTop}>
//           <img src={logo} alt="Logo" className='h-10' />
//         </div>
//         <ul className="flex gap-6 text-white">
//           {navItems.map((item) => (
//             <li key={item.label}>
//               <button
//                 onClick={() => handleScroll(item.href)}
//                 className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300
//                   ${active === item.label
//                     ? 'bg-white/20 text-yellow-300 shadow-lg'
//                     : 'hover:bg-white/10 hover:text-yellow-200'}`}
//               >
//                 {item.icon}
//                 <span className="text-sm font-medium">{item.label}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import {
  Home, Info, Target, BookOpen,
  Image, Calendar, HandHeart, Mail
} from 'lucide-react';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Home', icon: <Home size={18} />, href: '/' },
  { label: 'About Us', icon: <Info size={18} />, href: '/about' },
  { label: 'Our Mission', icon: <Target size={18} />, href: '/mission' },
  { label: 'Programmes', icon: <BookOpen size={18} />, href: '/programmes' },
  { label: 'Gallery', icon: <Image size={18} />, href: '/gallery' },
  { label: 'Events', icon: <Calendar size={18} />, href: '/events' },
  { label: 'Volunteer', icon: <HandHeart size={18} />, href: '/volunteer' },
  { label: 'Contact Us', icon: <Mail size={18} />, href: '/contact' },
];

const Navbar = ({ activeSection }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Navigation Items */}
        <ul className="flex gap-3 md:gap-4 text-gray-800">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={`#${item.href}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 
                  ${activeSection === item.href
                    ? 'bg-yellow-400 text-black shadow-md'
                    : 'hover:bg-yellow-100 hover:text-yellow-700'}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


