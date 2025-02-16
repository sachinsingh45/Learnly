import React from 'react';
import ContactUsForm from '../../ContactPage/ContactUsForm';
import contact from '../../../assets/Images/contact.png'
const ContactFormSection = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        {/* Left Side - Text */}
        <div className='text-center lg:text-left'>
          <h1 className='text-4xl sm:text-5xl font-bold text-richblack-5 mb-6'>
            Get in Touch
          </h1>
          <p className='text-lg text-richblack-300 mb-8'>
            We'd love to hear from you, Please fill out this form.
          </p>
          <img
            src={contact} 
            alt='Contact Us'
            className='w-64 mx-auto lg:mx-0 rounded-lg shadow-lg object-cover'
          />
        </div>


        {/* Right Side - Form */}
        <div className='bg-richblack-800 rounded-xl shadow-lg p-8 sm:p-12 lg:p-16 transform transition-all hover:scale-105 hover:shadow-2xl'>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;