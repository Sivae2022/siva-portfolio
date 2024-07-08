import React from 'react';
import logo from '../assets/Siva.png';


import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import Resume from './Resume';

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6 '>
      <div className='flex flex-shrink-0 items-center'>
        <p className='text-3xl font-extrabold'>PORTFOLIO</p>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <Resume/>
        <a href="https://www.linkedin.com/in/sivae11/"><FaLinkedin /></a>
        <a href="https://github.com/Sivae2022"><FaGithub /></a>
        <a href="https://x.com/siva93517350344"><FaTwitter /></a>
        <a href="https://www.instagram.com/_che_.__/"><FaInstagram /></a>
      </div>
    </nav>
  );
}

export default Navbar;
