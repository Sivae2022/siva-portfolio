import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaNodeJs } from 'react-icons/fa';
import { DiMongodb, DiReact } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  }
});

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
      whileInView={{opacity: 1, y:0}}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.5 }}
      className='my-20 text-center text-4xl'>Technologies</ motion.h1>
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 1.5 }}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaHtml5 className='text-7xl text-orange-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaCss3Alt className='text-7xl text-blue-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJsSquare className='text-7xl text-yellow-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiReact className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJava className='text-7xl text-red-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiMongodb className='text-7xl text-green-600' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-400' />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-7xl text-gray-400' />
        </motion.div>
      </ motion.div>
    </div>
  );
};

export default Technology;
