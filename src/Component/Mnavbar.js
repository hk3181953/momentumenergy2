import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa'; // Import FaPhone

function Mnavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Background Gradient for Upper Space */}
      <div
        style={{
          background: 'linear-gradient(to bottom, rgba(16, 74, 109, 0.8), rgba(12, 153, 77, 0.8))',
          height: '30px',
        }}
      ></div>

      <nav
        style={{
          background: 'white',
          color: 'white',
          marginTop: '-10px',
        }}
        className="shadow-md"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Phone Icon Button for Calling */}
            <div className="absolute inset-y-0 right-0 flex items-center space-x-2 sm:hidden">
              {/* Phone Icon */}
              <a
                href="tel:+923700086961"
                className="text-white hover:text-[#0a984b]"
                style={{ backgroundColor: '#0a984b', padding: '10px', borderRadius: '50%' }} // Add styling for the icon
              >
                <FaPhone size={20} /> {/* Add the phone icon */}
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-white hover:text-[#0a984b] focus:outline-none"
                onClick={toggleMenu}
                style={{ backgroundColor: '#0a984b' }} // Button background green
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ color: 'white' }} 
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Larger Square Frame for Logo without Border */}
            <div className="flex-shrink-0">
              <div
                className="flex items-center justify-center"
                style={{
                  height: '120px',
                  width: '140px',
                }}
              >
                <img
                  src="WhatsApp Image 2024-09-27 at 3.05.39 PM.jpeg"
                  alt="Momentum Energy Logo"
                  style={{
                    height: '100%', // Ensure image fills the container height
                    width: '140', // Adjust width to maintain aspect ratio
                    maxWidth: '100%', // Ensure image width does not exceed container width
                    objectFit: 'cover', // Ensure the image covers the container
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                />
              </div>
            </div>

            {/* Centered Navigation Links */}
            <div className="flex-1 flex items-center justify-center">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link to="/" className="text-black hover:bg-[#708c89] px-3 py-2 rounded-md text-md font-medium">
                   Home
                  </Link>
                  <Link to="/why-momentum-energy" className="text-black hover:bg-[#708c89] px-3 py-2 rounded-md text-md font-medium">
                   Why Momentum Energy
                  </Link>
                  <Link to="/about" className="text-black hover:bg-[#708c89] px-3 py-2 rounded-md text-md font-medium">
                   About
                  </Link>
                  <Link to="/contact" className="text-black hover:bg-[#708c89] px-3 py-2 rounded-md text-md font-medium">
                    Contact 
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media Icons (Visible on larger screens) */}
            <div className="hidden sm:flex space-x-4">
              <a href="https://www.facebook.com/momentumenergypk?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#708c89]">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/momentumenergypk?igsh=ajBpd29tcDFzbW5l" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#708c89]">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/+923700086961" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#708c89]">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Including social media icons for mobile) */}
        <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-white hover:bg-[#0a984b] block px-3 py-2 rounded-md text-base font-medium"
              style={{ backgroundColor: '#0a984b' }}
              onClick={closeMenu} // Closes the menu on click
            >
              Home
            </Link>
            <Link
              to="/why-momentum-energy"
              className="text-white hover:bg-[#0a984b] block px-3 py-2 rounded-md text-base font-medium"
              style={{ backgroundColor: '#0a984b' }}
              onClick={closeMenu} // Closes the menu on click
            >
              Why Momentum Energy
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-[#0a984b] block px-3 py-2 rounded-md text-base font-medium"
              style={{ backgroundColor: '#0a984b' }}
              onClick={closeMenu} // Closes the menu on click
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-[#0a984b] block px-3 py-2 rounded-md text-base font-medium"
              style={{ backgroundColor: '#0a984b' }}
              onClick={closeMenu} // Closes the menu on click
            >
              Contact
            </Link>

            {/* Social Media Icons in the Mobile Menu */}
            <div className="flex justify-center space-x-4 pt-2">
              <a href="https://www.facebook.com/momentumenergypk?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0a984b]">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/momentumenergypk?igsh=ajBpd29tcDFzbW5l" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0a984b]">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/+923700086961" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0a984b]">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Mnavbar;
