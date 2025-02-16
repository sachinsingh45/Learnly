import React from 'react';
import HighlightText from '../HomePage/HighlightText';

const Quote = () => {
  return (
    <div className='text-center lg:text-left max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-richblack-5 mb-6 leading-tight'>
        We are passionate about revolutionizing the way we learn. Our innovative platform{' '}
        <HighlightText text={'combines technology'} />,{' '}
        <span className='text-yellow-300 font-bold'>expertise</span>, and{' '}
        <span className='text-yellow-300 font-bold'>community</span> to create an{' '}
        <span className='text-yellow-300 font-bold'>unparalleled educational experience</span>.
      </h2>
      <p className='text-lg text-richblack-300 mt-6'>
        Join us in shaping the future of education. Together, we can make learning more accessible, engaging, and impactful for everyone.
      </p>
    </div>
  );
};

export default Quote;