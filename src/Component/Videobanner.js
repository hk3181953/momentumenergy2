import React, { useState } from 'react';

const VideoBanner = ({ heading, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-b-[50px] shadow-lg">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a984b] via-[#10456d] to-[#0c6d62] opacity-90 z-10 rounded-b-[50px]"></div>

      {/* Text and Button */}
      <div className="relative z-20 flex flex-col items-start justify-center w-full h-full p-4 md:p-6">
        <div className="mb-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white drop-shadow-lg">
            Welcome to Momentum
          </h1>
        </div>
        <div className="mb-4">
          <h2 className="text-3xl md:text-6xl font-bold text-[#040705] drop-shadow-lg">
            Renewable Energy,<br /> Re-energized Life.
          </h2>
        </div>

        {/* Logos Section */}
        <div className="absolute bottom-6 right-6 w-full grid grid-cols-3 gap-4 md:w-[50%] px-4 md:px-0 transform md:transform-none translate-x-5 md:translate-x-0">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <img src="/1680870_464x461_500.png" alt="Logo 1" className="w-12 h-12 md:w-16 md:h-16 shadow-lg" />
            <p className="text-white mt-2 text-xs md:text-sm text-center"><b>In-House Installation Team</b></p>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <img src="/WhatsApp Image 2024-09-27 at 6.18.17 PM.jpeg" alt="Logo 2" className="w-12 h-12 md:w-16 md:h-16 shadow-lg" />
            <p className="text-white mt-2 text-xs md:text-sm text-center"><b>Swift Warranty Claim</b></p>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <img src="/logo16.jpg" alt="Logo 3" className="w-12 h-12 md:w-16 md:h-16 shadow-lg" />
            <p className="text-white mt-2 text-xs md:text-sm text-center"><b>Guaranteed Stock Availability</b></p>
          </div>
        </div>
      </div>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-b-[50px]"
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
