import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(to right, rgba(13, 95, 105, 0.8), rgba(16, 74, 109, 0.8), rgba(12, 153, 77, 0.8))',
        color: 'white',
      }}
      className="py-8"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo and Contact Info */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 text-center md:text-left">
          {/* Larger Frame for the Logo */}
          <div
            className="flex items-center justify-center mb-4 p-2"
            style={{
              border: '2px solid white',
              borderRadius: '10px',
              width: '180px',
              height: '150px',
            }}
          >
            <img
              className="w-full h-full object-cover"
              src="WhatsApp Image 2024-09-23 at 1.38.30 PM.jpeg"
              alt="Logo"
            />
          </div>
          {/* Address */}
          <p className="text-sm">Plot 15/90, Block-3, BMCHS, Near Masjid Ali Karachi, Pakistan</p>
          {/* Email */}
          <p className="text-sm">
            <a
              href="mailto:info@momentumenergy.com"
              className="hover:text-[#006400]"
            >
              ahmed@momentumenergy.pk
            </a>
          </p>
          {/* Phone */}
          <p className="text-sm">
            <a href="tel:+923111137237" className="hover:text-[#006400]">
              +92 311 113 7237
            </a>
          </p>
        </div>

        {/* Center Section - Social Media Icons */}
        <div className="flex flex-wrap justify-center mb-6 md:mb-0 space-x-4">
          <a href="https://www.facebook.com/momentumenergypk?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#006400]">
            <FaFacebookF className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/momentumenergypk?igsh=ajBpd29tcDFzbW5l" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#006400]">
            <FaInstagram className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/company/momentumenergypk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#006400]">
            <FaLinkedinIn className="h-8 w-8" />
          </a>
          <a href="https://wa.me/+923700086961" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#006400]">
            <FaWhatsapp className="h-8 w-8" />
          </a>
        </div>

        {/* Right Section - Footer Navbar */}
        <div className="flex flex-col md:flex-row text-center md:text-right">
          <Link to="/" className="hover:text-[#006400] mb-2 md:mb-0 md:mr-4">
            Home
          </Link>
          <Link to="/why-momentum-energy" className="hover:text-[#006400] mb-2 md:mb-0 md:mr-4">
            Why Momentum Energy
          </Link>
          <Link to="/about" className="hover:text-[#006400] mb-2 md:mb-0 md:mr-4">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#006400]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
