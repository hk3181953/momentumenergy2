import React, { useEffect } from 'react';
import VideoBanner from '../Component/Videobanner'; // Importing the VideoBanner component

function Home() {
  useEffect(() => {
    const countUp = () => {
      const countElements = document.querySelectorAll('.countup');
      countElements.forEach((el) => {
        let count = 0;
        const interval = setInterval(() => {
          el.innerText = `${count}%`;
          count++;
          if (count > 100) {
            clearInterval(interval);
            el.classList.add('visible'); // Add visible class to trigger scale effect
          }
        }, 50); // Adjust the speed of the count-up
      });
    };

    countUp();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      const windowHeight = window.innerHeight;

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });

      // For stats section
      const statsSection = document.querySelector('.stats-section');
      if (statsSection) {
        const statsTop = statsSection.getBoundingClientRect().top;
        if (statsTop < windowHeight) {
          statsSection.classList.add('visible'); // Add visible class to trigger fade-in
        } else {
          statsSection.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <VideoBanner
        content={<p>Momentum Energy</p>}
        heading="Renewable energy Re-energized life."
        isHomePage={true} // Pass a prop to identify the home page
      />

      <div className="home-content py-8 px-4 md:px-16 lg:px-32">
      <div className="text-center mb-12">
  <h2 className="text-5xl font-bold text-dark-green mb-4">How We Work</h2>
  <h2 className="text-4xl font-semibold text-dark-blue">Steps of Co-operation</h2>
</div>


        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { num: 1, heading: 'Problem Recognition', description: 'The customers bring their query to us for a solution. In the first step, we cater to customers query and analyze their electricity bills.', logo: '/logo10.jpg' },
            { num: 2, heading: 'On-site visit', description: 'A team of engineers and analysts visit to survey the place where solar panels are to be installed. This gives us a clear understanding.', logo: '/logo12.jpg' },
            { num: 3, heading: 'System Recommendation', description: 'Our team then recommends the suitable system that can be installed at the analyzed place. The size of system is determined accordingly.', logo: '/logo13.jpg' },
            { num: 4, heading: '3D Design', description: 'Our engineer briefs the customers every in and out of the system with presentation of proper 3D Design.', logo: '/logo14.jpg' },
            { num: 5, heading: 'Installation', description: 'The installation process is done by a highly trained staff. The process might take some days/weeks, according to the size of system.', logo: '/logo14.jpg' },
            { num: 6, heading: 'After-Sales Service', description: 'After installation, a proper demo is presented to customers. Moreover, we try to provide the best after-sales service.', logo: '/logo15.jpg' }
          ].map((card) => (
            <div className="card-wrapper fade-in relative flex flex-col items-center" key={card.num}>
              {/* Card Number placed above the card */}
              <div className="card-number absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded-full px-4 py-1 text-lg font-semibold">
                {`${card.num}/6`}
              </div>
              <div className="card bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center">
                <div className="card-logo mb-4">
                  <img src={card.logo} alt="Logo" className="w-full h-auto" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-center">{card.heading}</h2>
                <p className="text-center text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section py-12 px-4 md:px-16 lg:px-32 bg-gray-100 fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column: 100% text */}
          <div className="flex flex-col items-center text-center">
            <div className="count-container">
              <div className="countup text-4xl font-bold text-green-600 fade-in">0%</div>
              <p className="word text-lg">Integrity</p>
              <div className="countup text-4xl font-bold text-green-600 fade-in">0%</div>
              <p className="word text-lg">Sustainability</p>
              <div className="countup text-4xl font-bold text-green-600 fade-in">0%</div>
              <p className="word text-lg">Innovation</p>
            </div>
          </div>

          {/* Second Column: Image */}
          <div className="flex justify-center items-center fade-in">
            <img src="WhatsApp Image 2024-09-27 at 6.04.11 PM.jpeg" alt="Descriptive" className="w-full h-auto rounded-lg shadow-md" />
          </div>

          {/* Third Column: Q/A */}
          <div className="flex flex-col items-center text-center fade-in">
            <h2 className="stats-question text-xl font-bold">Who We Are?</h2>
            <p className="stats-answer text-gray-700">We are the fastest growing solar company in Pakistan.</p>
            <p className="stats-answer text-gray-700">
              At Momentum Energy, we are contributing the future of energy through clean, sustainable and affordable solutions along with commitment to innovation and environmental stewardship, we specialize in providing cutting-edge solar and renewable energy systems tailored to meet the needs of both residential and commercial sectors.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
