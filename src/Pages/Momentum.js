import React, { useEffect, useRef, useState } from 'react';
import VideoBanner from '../Component/Videobannermomentum';
import { style } from 'framer-motion/client';


function Momentum() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]; // Create 5 refs

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeInClass = (index) => (scrollY > index * 400 ? 'in-view' : '');

  return (
    <>
      <VideoBanner
        heading="Why Momentum Energy?"
        content={<p>Where Sustainability Meets Affordability.</p>}
        scrollingText="Harnessing the Power of the Sun to Create Sustainable Solutions for Tomorrow’s Energy Needs."
      />

      <div className={`info-section-new fade-in ${fadeInClass(0)}`} ref={sectionRefs[0]}>
        <div className="info-content-new">
          <h1 className="section-heading-new">Why Choose Us?</h1>
          <p className="section-paragraph-new">
           Momentum energy is a solar energy solution provider for residential, commercial, industrial & agriculture sector. We take pride in offering reliable and cost-effective solutions that set us distinguish from other solar energy companies.
           Our solutions built with using top-brand equipments and installed through skilled labour along with highest quality standards to ensure functions seamlessly.
          </p>
        </div>
      </div>

      <div className={`new-section fade-in ${fadeInClass(1)}`} ref={sectionRefs[1]} 
           style={{ width: '100%', minHeight: '100vh', background: 'linear-gradient(to right, rgba(13, 95, 105, 0.8), rgba(16, 74, 109, 0.8), rgba(12, 153, 77, 0.8))' }}>
        <div className="image-text-frame">
          <div className="text-container-new">
            <h2 className="paragraph-heading-new">High Quality Products</h2>
            <p className="description-paragraph">
              <span>Tier-1, A-Grade Solar Panels, Inverters and Batteries</span><br />
              <span>Partnership with Sungrow - manufacturing inverters for 25 years</span><br />
              <span>Top quality Allied Equipment</span><br />
            </p>
          </div>
          <div className="image-frame-new">
            <img src="Longi-Sungrow-SGRS_2024-07-02-024701_crwt-removebg-preview.png" alt="Momentum Energy" className="styled-image-new" />
          </div>
        </div>
      </div>

      <div className={`new-section fade-in ${fadeInClass(2)}`} ref={sectionRefs[2]}>
        <div className="text-container-new">
          <h2 className="paragraph-heading-new">Sturdiest Structure</h2>
          <p className="description-paragraph">
            <span>Elevated: 14-gauge, 4” poles; double-girders; epoxy coated</span><br />
            <span>Roof-Mount: Heavy gauge aluminum structure; rust-proof</span><br />
            <span>Anti-sagging, anti-breakage warranty</span><br />
            <span>Customised, aesthetic design</span><br />
          </p>
        </div>
        <div className="image-frame-new mobile-image">
          <img src="17.jpeg" alt="Momentum Energy" className="styled-image-new" />
        </div>
      </div>

      <div className={`new-section fade-in ${fadeInClass(3)}`} ref={sectionRefs[3]} 
           style={{ width: '100%', minHeight: '100vh', background: 'linear-gradient(to right, rgba(13, 95, 105, 0.8), rgba(16, 74, 109, 0.8), rgba(12, 153, 77, 0.8))' }}>
        <div className="image-text-frame">
          <div className="text-container-new">
            <h2 className="paragraph-heading-new">Unmatched Warranties</h2>
            <p className="description-paragraph">
              <span>5 Years Replacement Warranties on Batteries and Inverters</span><br />
              <span>15 Years Product, 30 Years Performance Warranties on Solar Panels</span><br />
              <span>5 Years Warranty on Structures</span><br />
            </p>
          </div>
          <div className="image-frame-new">
            <img src="17.jpg" alt="Momentum Energy" className="styled-image-new" />
          </div>
        </div>
      </div>

      <div className={`new-section fade-in ${fadeInClass(4)}`} ref={sectionRefs[4]}>
        <div className="text-container-new">
          <h2 className="paragraph-heading-new">Seamless After-sales</h2>
          <p className="description-paragraph">
            <span>Swift warranty claims</span><br />
            <span>Generation Guarantee</span><br />
            <span>Preventive and Corrective maintenance visit</span><br />
            <span>Remote Monitoring via Systems Monitoring Center</span><br />
          </p>
        </div>
        <div className="image-frame-new mobile-image">
          <img src="20.jpeg" alt="Momentum Energy" className="styled-image-new" />
        </div>
      </div>
    </>
  );
}

export default Momentum;
