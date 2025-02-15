// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import coding from "../assets/Images/coding.png"
// Component Imports
import Footer from "../components/common/Footer"
// import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"

function Home() {
  return (
    <div>
      <div className="relative m-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <InstructorSection />
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>


        {/* <ReviewSlider /> */}
      </div>
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        
        <div className="text-center text-4xl font-semibold">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        

        {/* Code Section 1  */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-[50%] flex flex-col gap-6">
            <div className="text-4xl font-semibold">
              Unlock your
              <HighlightText text={"coding potential"} /> with our online courses.
            </div>
            <div className="text-richblack-300 text-lg">
              Our courses are designed and taught by industry experts who have years of
              experience in coding and are passionate about sharing their knowledge with
              you.
            </div>
            <div className="flex flex-row gap-7">
              <CTAButton active={true} linkto={"/signup"}>
                Try it Yourself
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                Learn More
              </CTAButton>
            </div>
          </div>

          <div className="lg:w-[50%] flex justify-center">
            <div className=" transform transition-all duration-500 hover:scale-105">
              <img
                src={coding}
                alt="Coding Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          <LearningLanguageSection />
        </div>

      

      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default Home