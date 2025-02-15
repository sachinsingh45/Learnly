import React from 'react';
import { motion } from 'framer-motion';
import HighlightText from './HighlightText';
import know_your_progress from '../../../assets/Images/Know_your_progress.png';
import compare_with_others from '../../../assets/Images/Compare_with_others.png';
import plan_your_lesson from '../../../assets/Images/calender.png';
import CTAButton from '../HomePage/Button';

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32 '>
      <div className='flex flex-col gap-6 items-center text-center'>
        <h2 className='text-4xl font-semibold text-white'>
          Your Swiss Knife for
          <HighlightText text={' learning any language'} />
        </h2>
        <p className='text-richblack-300 text-lg font-medium max-w-2xl'>
          Make learning multiple languages easy with <b>20+ languages</b>, realistic voice-over, progress tracking, and a customizable schedule.
        </p>
      </div>

      {/* Image Section with Animations */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 mt-10'>
        {[know_your_progress, compare_with_others, plan_your_lesson].map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`FeatureImage${index}`}
            className='object-contain w-[250px] md:w-[300px] cursor-pointer hover:scale-105 transition-transform duration-300'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className='mt-10'>
        <CTAButton active={true} linkto={'/signup'}>
          <span>Learn more</span>
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
