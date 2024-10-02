import React, { useState } from 'react';

const VideoBanner = ({ heading, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-b-[30px] md:rounded-b-[50px]">
      {/* Darker gradient overlay with bottom curve */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a984b] via-[#10456d] to-[#0c6d62] opacity-90 z-10 rounded-b-[50px]"></div>

      {/* Content on top of the video */}
      <div className="relative z-20 flex flex-col items-start justify-center w-full h-full p-4 md:p-6">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">
            Contact Us
          </h1>
        </div>

        {/* Subheading: Let’s Connect and Spark Up Your Solar Journey */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-3xl md:text-6xl font-bold text-black">
            Let’s Connect and <br /> Spark Up Your Solar Journey!
          </h2>
        </div>

      
      </div>

      {/* Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-b-[30px] md:rounded-b-[50px]"
        autoPlay
        muted
        loop
      >
        <source src="/WhatsApp Video 2024-09-24 at 8.59.15 PM.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
    </div>
  );
};

export default VideoBanner;
