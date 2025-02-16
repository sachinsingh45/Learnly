import React from 'react';
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../../core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Transform Your Learning Experience",
    highlightText: "Anytime, Anywhere",
    description:
      "Learnaly empowers learners worldwide with flexible, affordable, and industry-relevant online courses. Join a global community of learners and unlock your potential.",
    BtnText: "Explore Courses",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Industry-Aligned Curriculum",
    description:
      "Our courses are designed in collaboration with industry experts to ensure you gain the skills employers are looking for.",
  },
  {
    order: 2,
    heading: "Interactive Learning Methods",
    description:
      "Engage with hands-on projects, live sessions, and peer collaboration to master new skills effectively.",
  },
  {
    order: 3,
    heading: "Recognized Certification",
    description:
      "Earn certificates endorsed by top organizations and universities to boost your career prospects.",
  },
  {
    order: 4,
    heading: "Real-Time Feedback",
    description:
      "Get instant feedback on your progress with auto-graded assignments and quizzes.",
  },
  {
    order: 5,
    heading: "Job-Ready Skills",
    description:
      "Gain practical, job-ready skills that prepare you for the demands of the modern workforce.",
  },
];

const LearningGrid = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mb-20 p-5 max-w-7xl mx-auto'>
      {LearningGridArray.map((card, index) => (
        <div
          key={index}
          className={`
            ${index === 0 && "lg:col-span-2 lg:h-[320px] p-8 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl shadow-2xl"}
            ${
              card.order % 2 === 1
                ? "bg-richblack-800 lg:h-[280px] p-8 rounded-xl shadow-lg"
                : "bg-richblack-900 lg:h-[280px] p-8 rounded-xl shadow-lg"
            }
            ${card.order === 3 && "lg:col-start-2"}
            ${card.order < 0 && "bg-transparent"}
            transition-transform duration-300 hover:scale-105
          `}
        >
          {card.order < 0 ? (
            <div className='lg:w-[90%] flex flex-col gap-6'>
              <div className='text-4xl font-bold text-white'>
                {card.heading} <HighlightText text={card.highlightText} />
              </div>
              <p className='text-richblack-100 text-lg font-medium'>
                {card.description}
              </p>
              <div className='w-fit mt-4'>
                <CTAButton active={true} linkto={card.BtnLink}>
                  {card.BtnText}
                </CTAButton>
              </div>
            </div>
          ) : (
            <div className='flex flex-col gap-6'>
              <h1 className='text-white text-2xl font-bold'>
                {card.heading}
              </h1>
              <p className='text-richblack-100 text-lg font-medium'>
                {card.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LearningGrid;