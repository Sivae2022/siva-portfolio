import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

const Resume = () => {
  return (
    
      
      <div className="flex space-x-">
        <a href={resume} download className="flex items-center px-4 py-2 ">
          <FaDownload className="mr-2 size-5" /> 
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer" >
          <FaEye className="mr-2 my-3 size-6" /> 
        </a>
      
    </div>
  );
};

export default Resume;
