import React, { useEffect } from 'react';
import VideoBanner from '../Component/videobannerabout';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (1200ms)
      easing: 'ease-in-out', // Animation easing function
      once: false, // Set to false to allow re-triggering on scroll
    });
  }, []);

  return (
    <>
      <VideoBanner />

      <div className="flex flex-wrap mt-8">
        {/* Left side: Image with heading */}
        <div
          className="w-full md:w-1/2 flex justify-center items-center p-4"
          data-aos="fade-up"
        >
          <div className="relative w-full h-full">
            <img
              src="/18.jpeg"
              alt="About Us Image"
              className="rounded-lg shadow-lg w-full h-96 object-cover border-4 border-gradient-to-r from-dark-blue via-dark-green to-light-green"
            />
          </div>
        </div>

        {/* Right side: Text section with a stylish question and notebook-style answer */}
        <div
          className="w-full md:w-1/2 flex justify-center items-center p-6"
          data-aos="fade-up"
        >
          <div className="w-full">
            <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#10456d' }}>
              Who We Are
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{
                whiteSpace: 'pre-line',
                borderLeft: '2px solid #10456d',
                paddingLeft: '10px',
                lineHeight: '1.6',
              }}
            >
              At Momentum Energy, we are driven by a profound commitment to delivering sustainable and affordable energy solutions. Our mission is to lead a global transformation in the way energy is consumed, pushing boundaries and embracing innovation. By harnessing the limitless power of solar technology, we aim to revolutionize the energy landscape, providing cleaner, greener alternatives that not only reduce costs but also secure a brighter, more sustainable future for generations to come. Join us as we pave the way for a renewable energy revolution.
              We believe that by tapping into the inexhaustible power of the sun, we can create energy solutions that are not only economically viable but also environmentally responsible. Our forward-thinking approach ensures that we are always a step ahead in the journey toward clean energy, reducing carbon footprints and embracing the technologies of tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* New Section: Our Solutions */}
      <section className="mt-12">
        <div className="container mx-auto px-4">
          <h1
            className="text-3xl font-bold text-center mb-8"
            style={{
              background: 'linear-gradient(135deg, #10456d, #0c6d62, #0a984b)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
            data-aos="fade-up"
          >
            Our Solutions
          </h1>

          {/* First Row */}
          <div className="flex flex-wrap justify-between mt-8">
            {/* Box 1: Image with Heading */}
            <div
              className="w-full md:w-1/3 px-4 mb-8"
              data-aos="fade-up"
            >
              <h3 className="text-lg font-bold text-center mb-4">Residential</h3>
              <img
                src="/17.jpeg"
                alt="Residential Solution"
                className="w-full h-64 object-cover rounded-lg shadow-lg border-4 border-gradient-to-r from-dark-blue via-dark-green to-light-green"
              />
            </div>

            {/* Box 2: Card */}
            <div
              className="card w-full md:w-1/3 px-4 mb-8 hover:scale-105 transition-transform duration-300" // Added hover effect
              data-aos="fade-up"
            >
              <div className="bg-gradient-to-r from-dark-blue via-dark-green to-light-green p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                <h2
                  className="text-xl font-bold mb-4 border-b-2 border-black pb-2 text-center"
                  style={{ backgroundColor: '#10456d', color: 'white' }}
                >
                  On Grid
                </h2>
                <div className="flex-grow text-black overflow-hidden">
                  <p className="mb-2">Details:</p>
                  <ul className="list-disc pl-5">
                    <li>Bill Reduction (Zero Billing)</li>
                    <li>Net-Metered</li>
                    <li>10+ Years Replacement Warranties</li>
                    <li>2 Years FoC Operations & Maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Box 3: Card */}
            <div
              className="card w-full md:w-1/3 px-4 mb-8 hover:scale-105 transition-transform duration-300" // Added hover effect
              data-aos="fade-up"
            >
              <div className="bg-gradient-to-r from-dark-blue via-dark-green to-light-green p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                <h2
                  className="text-xl font-bold mb-4 border-b-2 border-black pb-2 text-center"
                  style={{ backgroundColor: '#0c6d62', color: 'white' }}
                >
                  Hybrid
                </h2>
                <div className="flex-grow text-black overflow-hidden">
                  <p className="mb-2">Details:</p>
                  <ul className="list-disc pl-5">
                    <li>Bill Reduction (Peak Rate Reduction)</li>
                    <li>Net Metered</li>
                    <li>10+ Years Replacement Warranties</li>
                    <li>Power Back-up</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-between mt-8">
            {/* Box 1: Image with Heading */}
            <div
              className="w-full md:w-1/3 px-4 mb-8"
              data-aos="fade-up"
            >
              <h3 className="text-lg font-bold text-center mb-4">Commercial</h3>
              <img
                src="/19.jpeg"
                alt="Commercial Solution"
                className="w-full h-64 object-cover rounded-lg shadow-lg border-4 border-gradient-to-r from-dark-blue via-dark-green to-light-green"
              />
            </div>

            {/* Box 2: Card */}
            <div
              className="card w-full md:w-1/3 px-4 mb-8 hover:scale-105 transition-transform duration-300" // Added hover effect
              data-aos="fade-up"
            >
              <div className="bg-gradient-to-r from-dark-blue via-dark-green to-light-green p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                <h2
                  className="text-xl font-bold mb-4 border-b-2 border-black pb-2 text-center"
                  style={{ backgroundColor: '#10456d', color: 'white' }}
                >
                  On Grid
                </h2>
                <div className="flex-grow text-black overflow-hidden">
                  <p className="mb-2">Details:</p>
                  <ul className="list-disc pl-5">
                    <li>Bill Reduction (Zero Billing)</li>
                    <li>Net-Metered</li>
                    <li>10+ Years Replacement Warranties</li>
                    <li>2 Years FoC Operations & Maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Box 3: Card */}
            <div
              className="card w-full md:w-1/3 px-4 mb-8 hover:scale-105 transition-transform duration-300" // Added hover effect
              data-aos="fade-up"
            >
              <div className="bg-gradient-to-r from-dark-blue via-dark-green to-light-green p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                <h2
                  className="text-xl font-bold mb-4 border-b-2 border-black pb-2 text-center"
                  style={{ backgroundColor: '#0c6d62', color: 'white' }}
                >
                  Hybrid
                </h2>
                <div className="flex-grow text-black overflow-hidden">
                  <p className="mb-2">Details:</p>
                  <ul className="list-disc pl-5">
                    <li>Bill Reduction (Peak Rate Reduction)</li>
                    <li>Net Metered</li>
                    <li>10+ Years Replacement Warranties</li>
                    <li>Power Back-up</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
