import React from 'react';

const Hero = ({ backgroundImage }) => {
  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      // }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white  z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-black drop-shadow-lg animate-fadeInUp">
          Together, We Make a Difference
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-800 leading-relaxed animate-fadeInUp delay-200">
          Akhil Ekta Charitable Trust is dedicated to uplifting the underprivileged through compassion,
          action, and community participation.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fadeInUp delay-300">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg">
            Donate Now
          </button>
          <button className="bg-white/20 hover:bg-white/30 text-black px-6 py-3 rounded-full font-semibold border border-white transition duration-300 shadow-lg">
            Join as a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
