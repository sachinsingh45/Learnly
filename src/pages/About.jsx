import React from 'react';
import HighlightText from "../components/core/HomePage/HighlightText";
import Quote from '../components/core/AboutPage/Quote';
import FoundingStory from "../assets/Images/FoundingStory.png";
import StatsComponent from '../components/core/AboutPage/Stats';
import LearningGrid from '../components/core/AboutPage/LearningGrid';
import ContactFormSection from '../components/core/AboutPage/ContactFormSection';
import Footer from '../components/common/Footer';

const About = () => {
  return (
    <div className='mx-auto mt-[100px] text-white max-w-7xl px-4 sm:px-6 lg:px-8'>
      
      {/* section 2 */}
      <section className='mb-20'>
        <div className='max-w-4xl mx-auto'>
          <Quote />
        </div>
      </section>

      <section className='mb-20'>
      <div className='flex flex-col gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Founding Story Section */}
        <div className='flex flex-col lg:flex-row gap-10 items-center'>
          {/* Left Box - Text */}
          <div className='lg:w-1/2 space-y-6'>
            <h1 className='text-3xl sm:text-4xl font-bold text-richblack-5'>
              Our Journey Begins
            </h1>
            <p className='text-richblack-300 text-lg'>
              At Learnaly, we believe that education should be accessible, engaging, and transformative. Our journey started with a simple yet powerful idea: to create a platform that empowers learners worldwide to achieve their goals, no matter where they are or what their background is.
            </p>
            <p className='text-richblack-300 text-lg'>
              Founded by a team of educators, technologists, and lifelong learners, Learnaly was born out of a shared passion for innovation and a commitment to breaking down barriers in education. We envisioned a world where anyone, anywhere, could access high-quality learning resources and unlock their full potential.
            </p>
          </div>

          {/* Right Box - Image */}
          <div className='lg:w-1/2'>
            <img
              src={FoundingStory}
              alt='Founding Story'
              className='rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105'
            />
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className='flex flex-col lg:flex-row gap-10'>
          {/* Vision Box */}
          <div className='lg:w-1/2 space-y-6 bg-richblack-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'>
            <h1 className='text-3xl sm:text-4xl font-bold text-richblack-5'>
              Our Vision
            </h1>
            <p className='text-richblack-300 text-lg'>
              We envision a future where learning knows no boundaries. At Learnaly, we strive to create a global community of learners who are empowered to explore, innovate, and grow. Our platform is designed to inspire curiosity, foster creativity, and make education a lifelong adventure.
            </p>
          </div>

          {/* Mission Box */}
          <div className='lg:w-1/2 space-y-6 bg-richblack-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'>
            <h1 className='text-3xl sm:text-4xl font-bold text-richblack-5'>
              Our Mission
            </h1>
            <p className='text-richblack-300 text-lg'>
              Our mission is to revolutionize education by providing accessible, high-quality learning experiences for everyone. Through cutting-edge technology, engaging content, and a vibrant community, we aim to empower learners to achieve their dreams and make a positive impact on the world.
            </p>
          </div>
        </div>
      </div>
    </section>
      {/* section 4 */}
      <section className='mb-20'>
        <StatsComponent />
      </section>

      {/* section 5 */}
      <section className='mx-auto flex flex-col items-center justify-between gap-16 mb-[140px]'>
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* section 6 */}
      <section className='mb-20'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-8'>Reviews from Other Learners</h2>
          {/* <ReviewSlider /> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;