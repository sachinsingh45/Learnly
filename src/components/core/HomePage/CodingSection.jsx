import React from 'react';
import { motion } from 'framer-motion';
import HighlightText from './HighlightText';
import CTAButton from '../HomePage/Button';
import coding from '../../../assets/Images/coding.png';

const CodingSection = () => {
  return (
    <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 p-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-lg'>
      <div className='text-center lg:text-left max-w-2xl'>
        <h2 className='text-4xl font-semibold text-white'>
          Unlock your
          <HighlightText text={' coding potential'} /> with our online courses.
        </h2>
        <p className='text-lg text-white mt-4'>
        Learn from industry-leading experts with years of hands-on experience in coding. Our courses are designed to equip you with real-world skills, ensuring you stay ahead in the tech industry. Join us and transform your passion into expertise! 🚀
        </p>
        <div className='mt-6 flex flex-col sm:flex-row gap-4'>
          <CTAButton active={true} linkto={'/signup'}>
            Try it Yourself
          </CTAButton>
          <CTAButton active={false} linkto={'/signup'}>
            Learn More
          </CTAButton>
        </div>
      </div>
      
      <motion.div 
        className='relative w-full max-w-lg' 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <img src={coding} alt='Coding Illustration' className='w-full h-auto rounded-lg shadow-md' />
      </motion.div>
    </div>
  );
};

export default CodingSection;
