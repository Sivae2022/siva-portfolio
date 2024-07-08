import React from 'react';
import { HERO_CONTENT } from '../constants';
import { delay, motion } from "framer-motion";
import profile from '../assets/Profile.jpg'; // Correct import statement
import about from '../assets/about.jpg'; // Incorrect import statement
import About from './About';

const container = (delay) => ({
  hidden: { 
    x: -100, 
    opacity: 0 
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    }
  }
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-7 text-7xl font-bold tracking-tight lg:my-16 lg:text-8xl'
            >
              Siva E
            </motion.h1>
            
            <motion.span 
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'
            >
              Full Stack Developer
            </motion.span>
            
            <motion.p 
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-6 max-w-xl py-2 font-light tracking-tighter'
            >
              <span className='text-xl'>{HERO_CONTENT}</span>
            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={about} 
              alt="siva"   className='rounded-xl'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
