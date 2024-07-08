import React from 'react';
import about from '../assets/Profile.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='my-2 text-center text-4xl text-neutral-500'>
        About <span className='text-neutral-500'>Me</span>
      </motion.h1>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className='rounded-xl text-2xl' src={about} alt="About me" width={400} height={400} />
          </div>
        </ motion.div>
        <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-20 max-w-xl py-6 text-xl'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;