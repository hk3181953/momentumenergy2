import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      style={{
        background:
          'linear-gradient(to right, rgba(13, 95, 105, 0.8), rgba(16, 74, 109, 0.8), rgba(12, 153, 77, 0.8))',
        color: 'white',
      }}
      className="py-8"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Left Section - Logo and Contact Info */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 text-center md:text-left">

          {/* Logo */}
          <div
            className="flex items-center justify-center mb-4 p-2"
            style={{
              border: '2px solid rgba(255,255,255,0.9)',
              borderRadius: '10px',
              width: '180px',
              height: '150px',
              background: 'rgba(255,255,255,0.05)',
            }}
          >
            <img
              className="w-full h-full object-cover rounded-md"
              src="/WhatsApp Image 2024-09-23 at 1.38.30 PM.jpeg"
              alt="Momentum Energy Logo"
            />
          </div>

          {/* Address */}
          <p className="text-sm mb-1">
            Plot 15/90, Block-3, BMCHS,
            <br />
            Near Masjid Ali Karachi, Pakistan
          </p>

          {/* Email */}
          <p className="text-sm mb-1">
            <a
              href="mailto:hashim@momentumenergy.pk"
              className="transition-all duration-300 hover:text-green-300"
            >
              hashim@momentumenergy.pk
            </a>
          </p>

          {/* Phone */}
          <p className="text-sm mb-2">
            <a
              href="tel:+923111137237"
              className="transition-all duration-300 hover:text-green-300"
            >
              +92 311 113 7237
            </a>
          </p>

          {/* Privacy Policy */}
          <Link
            to="/privacy-policy"
            className="inline-flex items-center justify-center px-5 py-2 mt-2 text-sm font-semibold tracking-wide text-white border border-white/70 rounded-full bg-white/10 transition-all duration-300 hover:bg-white hover:text-[#0d5f69] hover:border-white shadow-md"
          >
            Privacy Policy
          </Link>

        </div>

        {/* Center Section - Social Media Icons */}
        <div className="flex flex-wrap justify-center items-center mb-6 md:mb-0 gap-5">

          <a
            href="https://www.facebook.com/momentumenergypk?mibextid=JRoKGi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white transition-all duration-300 hover:text-green-300 hover:scale-110"
          >
            <FaFacebookF className="h-7 w-7" />
          </a>

          <a
            href="https://www.instagram.com/momentumenergypk?igsh=ajBpd29tcDFzbW5l"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white transition-all duration-300 hover:text-green-300 hover:scale-110"
          >
            <FaInstagram className="h-7 w-7" />
          </a>

          <a
            href="https://www.linkedin.com/company/momentumenergypk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white transition-all duration-300 hover:text-green-300 hover:scale-110"
          >
            <FaLinkedinIn className="h-7 w-7" />
          </a>

          <a
            href="https://wa.me/+923700086961"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white transition-all duration-300 hover:text-green-300 hover:scale-110"
          >
            <FaWhatsapp className="h-7 w-7" />
          </a>

        </div>

        {/* Right Section - Footer Navbar */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-right">

          <Link
            to="/"
            className="transition-all duration-300 hover:text-green-300 mb-2 md:mb-0 md:mr-4"
          >
            Home
          </Link>

          <Link
            to="/why-momentum-energy"
            className="transition-all duration-300 hover:text-green-300 mb-2 md:mb-0 md:mr-4"
          >
            Why Momentum Energy
          </Link>

          <Link
            to="/about"
            className="transition-all duration-300 hover:text-green-300 mb-2 md:mb-0 md:mr-4"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="transition-all duration-300 hover:text-green-300"
          >
            Contact
          </Link>

        </div>

      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-white/20">
        <p className="text-xs text-white/70">
          © {new Date().getFullYear()} Momentum Energy. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;