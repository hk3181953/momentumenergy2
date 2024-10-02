import React, { useEffect } from 'react';
import VideoBanner from '../Component/Videobannercontact';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (1200ms)
      easing: 'ease-in-out', // Animation easing function
      once: false, // Set to false to allow re-triggering on scroll
    });
  }, []);

  const sendEmail = async (values) => {
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('phone', values.phone);
    formData.append('email', values.email);
    formData.append('file', values.file);

    try {
      await emailjs.send(
        'service_rnu3llp',
        'template_sl3pvx6',
      formData,
        {
          publicKey: '6x08c0pa60t3xHlBL',
          privateKey:'zmr0gFJsQ-0gQoqCp1dr4'
        },
      );
      console.log('SUCCESS!');
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }
    
      console.log('ERROR', err);
    }
  };

  return (
    <>
      <VideoBanner />

      <div className="contact-section">
        {/* Centered Form */}
        <div className="contact-form-container" data-aos="fade-up">
          <h2 className="form-title">Schedule Consultation for a Tailored Quote</h2>
          <Formik initialValues={{name:'',email:'',file:''}}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          phone: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          file: Yup.mixed().required('A file is required'),
        })}
        onSubmit={sendEmail}
          >
           {({ setFieldValue }) => (
              <Form className="styled-form">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" required className="form-input" />

                <label htmlFor="phone">Phone Number</label>
                <Field type="tel" id="phone" name="phone" required className="form-input" />

                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" required className="form-input" />

                <label htmlFor="file">Attach Electricity Bill</label>
                <input 
                  type="file" 
                  id="file" 
                  name="file" 
                  className="form-input" 
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }} 
                />

                <button type="submit" className="submit-button">Submit</button>
              </Form>
            )}

          </Formik>
         
        </div>

        {/* Info Section */}
        <div className="info-section" data-aos="fade-up">
          <div className="info-box">
            <h3 className="info-heading">
              <FaMapMarkerAlt /> Address
            </h3>
            <p className="info-text">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Plot+15/90,+Block-3,+BMCHS,+Near+Masjid+Ali+Karachi,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plot 15/90, Block-3, BMCHS, Near Masjid Ali Karachi, Pakistan
              </a>
            </p>
          </div>
          <div className="info-box">
            <h3 className="info-heading">
              <FaPhoneAlt /> UAN
            </h3>
            <p className="info-text">
              <a href="tel:+923111137237">+92 311 113 7237</a>
            </p>
          </div>
          <div className="info-box">
            <h3 className="info-heading">
              <FaEnvelope /> Email
            </h3>
            <p className="info-text">
              <a href="mailto:info@momentumenergy.com">info@momentumenergy.com</a>
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-container" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7010400555014!2d66.97124831519128!3d24.87429978454549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d39e5018b79%3A0x8c442601059df54f!2sPlot%2015%2F90%2C%20Block-3%2C%20BMCHS%2C%20Near%20Masjid%20Ali%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1695786421223!5m2!1sen!2s"
            title="Google Maps"
            allowFullScreen
            style={{
              width: '100%',
              height: '400px',
              border: 'none',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          ></iframe>

          {/* White Box Inside Map */}
          <div className="map-info-box" data-aos="fade-up">
            <p className="map-address">Plot 15/90, Block-3, BMCHS, Near Masjid Ali Karachi, Pakistan</p>

            {/* Star Rating */}
            <div className="map-rating">
              ★ ★ ★ ★ ★ <span className="rating-score">4.8</span>
            </div>

            {/* Get Directions Button */}
            <button
              onClick={() => {
                window.open(
                  'https://www.google.com/maps/search/?api=1&query=Plot+15%2F90%2C+Block-3%2C+BMCHS%2C+Near+Masjid+Ali%2C+Karachi%2C+Pakistan',
                  '_blank'
                );
              }}
              className="map-button"
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
