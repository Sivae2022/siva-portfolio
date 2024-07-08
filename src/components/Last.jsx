import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
// Ensure CONTACT object is defined
const CONTACT = {
  address: 'Kallakurichi, Tamil Nadu, India',
  phoneNo: '8608507236',
  email: 'elusiva007@gmail.com'
};

const Last = () => {
  return (
    <div>
      <div>
        <div className='border-b border-neutral-900 pb-20'>
          <motion.h1
          whileInView={{opacity: 1, y:0}}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
          className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
          <motion.div 
          whileInView={{opacity: 1, y:0}}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center tracking-tighter'>
            <p className='my-4'><FontAwesomeIcon icon={faMapMarkerAlt} /> {CONTACT.address}</p>
            <p className='my-4'><FontAwesomeIcon icon={faPhone} /> {CONTACT.phoneNo}</p>
            <a href={`mailto:${CONTACT.email}`} className='border-b'><FontAwesomeIcon icon={faEnvelope} /> {CONTACT.email}</a>
          </ motion.div>
        </div>
      </div>
    </div>
  );
};

export default Last;