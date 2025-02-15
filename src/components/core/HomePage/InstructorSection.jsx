import React from 'react';
import { motion } from 'framer-motion';
import Instructor from '../../../assets/Images/Instructor.png';
import HighlightText from './HighlightText';
import CTAButton from '../HomePage/Button';
import { FaArrowRight } from 'react-icons/fa';

const InstructorSection = () => {
  return (
    <div className='pt-16 overflow-x-hidden flex flex-col lg:flex-row items-center gap-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-lg'>
      
      <motion.div 
        className='w-full lg:w-[50%]' 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <img src={Instructor} alt='Instructor' className='shadow-lg rounded-lg w-full' />
      </motion.div>

      <motion.div 
        className='w-full lg:w-[50%] flex flex-col gap-6 text-white' 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-4xl font-semibold'>
          Become an
          <HighlightText text={' Instructor'} />
        </h2>

        <p className='text-lg font-medium w-[80%]'>Inspire learners globally by sharing your expertise! 🚀 Learnly empowers you with cutting-edge tools, seamless support, and a thriving community—so you can <HighlightText text={' teach what you love, earn what you deserve, and make a lasting impact'} />.
        </p>

        <div className='w-fit'>
          <CTAButton active={true} linkto={'/signup'}>
            <div className='flex flex-row gap-2 items-center'>
              Start Teaching Today
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </motion.div>

    </div>
  );
};

export default InstructorSection;
