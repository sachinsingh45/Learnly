import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiConnector } from '../../services/apiconnector';
import { contactusEndpoint } from '../../services/apis';
import CountryCode from '../../data/countrycode.json';

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log('Logging Data', data);
    try {
      setLoading(true);
      // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      const response = { status: 'OK' };
      console.log('Logging response', response);
      setLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      console.log('Error:', error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: '',
        firstname: '',
        lastname: '',
        message: '',
        phoneNo: '',
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)} className='space-y-6'>
      <div className='flex flex-col gap-6'>
        {/* First Name and Last Name */}
        <div className='flex flex-col md:flex-row gap-5'>
          {/* First Name */}
          <div className='flex flex-col w-full'>
            <label htmlFor='firstname' className='text-richblack-5 text-sm mb-1'>
              First Name
            </label>
            <input
              type='text'
              name='firstname'
              id='firstname'
              placeholder='Enter first name'
              className='w-full px-4 py-3 bg-richblack-700 border-2 border-richblack-500 rounded-lg text-richblack-5 placeholder-richblack-400 focus:outline-none focus:border-yellow-300 transition-all duration-200 hover:border-yellow-300'
              {...register('firstname', { required: true })}
            />
            {errors.firstname && (
              <span className='text-yellow-300 text-sm mt-1 animate-pulse'>
                Please enter your first name
              </span>
            )}
          </div>

          {/* Last Name */}
          <div className='flex flex-col w-full'>
            <label htmlFor='lastname' className='text-richblack-5 text-sm mb-1'>
              Last Name
            </label>
            <input
              type='text'
              name='lastname'
              id='lastname'
              placeholder='Enter last name'
              className='w-full px-4 py-3 bg-richblack-700 border-2 border-richblack-500 rounded-lg text-richblack-5 placeholder-richblack-400 focus:outline-none focus:border-yellow-300 transition-all duration-200 hover:border-yellow-300'
              {...register('lastname')}
            />
          </div>
        </div>

        {/* Email */}
        <div className='flex flex-col'>
          <label htmlFor='email' className='text-richblack-5 text-sm mb-1'>
            Email Address
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter email address'
            className='w-full px-4 py-3 bg-richblack-700 border-2 border-richblack-500 rounded-lg text-richblack-5 placeholder-richblack-400 focus:outline-none focus:border-yellow-300 transition-all duration-200 hover:border-yellow-300'
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className='text-yellow-300 text-sm mt-1 animate-pulse'>
              Please enter your email address
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div className='flex flex-col'>
          <label htmlFor='phonenumber' className='text-richblack-5 text-sm mb-1'>
            Phone Number
          </label>
          <div className='flex flex-row gap-2'>
            {/* Country Code Dropdown */}
            <select
              name='dropdown'
              id='dropdown'
              className='w-[30%] px-4 py-3 bg-richblack-700 border-2 border-richblack-500 rounded-lg text-richblack-5 focus:outline-none focus:border-yellow-300 transition-all duration-200 hover:border-yellow-300'
              {...register('countrycode', { required: true })}
            >
              {CountryCode.map((element, index) => (
                <option key={index} value={element.code}>
                  {element.code} - {element.country}
                </option>
              ))}
            </select>

            {/* Phone Number Input */}
            <input
              type='number'
              name='phonenumber'
              id='phonenumber'
              placeholder='12345 67890'
              className='w-[70%] px-4 py-3 bg-richblack-700 border-2 border-richblack-500 rounded-lg text-richblack-5 placeholder-richblack-400 focus:outline-none focus:border-yellow-300 transition-all duration-200 hover:border-yellow-300 appearance-none'
              {...register('phoneNo', {
                required: { value: true, message: 'Please enter phone number' },
                maxLength: { value: 10, message: 'Invalid phone number' },
                minLength: { value: 8, message: 'Invalid phone number' },
              })}
            />
          </div>
          {errors.phoneNo && (
            <span className='text-yellow-300 text-sm mt-1 animate-pulse'>
              {errors.phoneNo.message}
            </span>
          )}
        </div>

        {/* Message */}
        <div className='flex flex-col'>
          <label htmlFor='message' className='text-richblack-5 text-sm mb-1'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='7'
            placeholder='Enter your message here'
            className='w-full px-4 py-3 bg-richblack-700 border-2 border-richblack-500 rounded-lg text-richblack-5 placeholder-richblack-400 focus:outline-none focus:border-yellow-300 transition-all duration-200 hover:border-yellow-300 resize-none'
            {...register('message', { required: true })}
          />
          {errors.message && (
            <span className='text-yellow-300 text-sm mt-1 animate-pulse'>
              Please enter your message
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-yellow-300 text-richblack-900 py-3 px-6 rounded-lg font-bold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 active:scale-95'
        >
          {loading ? (
            <div className='flex items-center justify-center gap-2'>
              <div className='w-4 h-4 border-2 border-richblack-900 border-t-transparent rounded-full animate-spin'></div>
              Sending...
            </div>
          ) : (
            'Send Message'
          )}
        </button>

        {/* Success Message */}
        {isSubmitted && (
          <div className='mt-4 p-4 bg-green-500 text-richblack-900 rounded-lg text-center animate-fade-in'>
            Your message has been sent successfully! 🎉
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactUsForm;