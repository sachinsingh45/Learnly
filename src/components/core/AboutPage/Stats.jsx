import React from 'react';

const Stats = [
  { count: '5K', label: 'Active Students' },
  { count: '10+', label: 'Mentors' },
  { count: '200+', label: 'Courses' },
  { count: '50+', label: 'Awards' },
];

const StatsComponent = () => {
  return (
    <section className='bg-richblack-800 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {Stats.map((data, index) => (
            <div
              key={index}
              className='text-center bg-richblack-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
            >
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-300'>
                {data.count}
              </h1>
              <h2 className='text-lg sm:text-xl text-richblack-5 mt-3'>
                {data.label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsComponent;