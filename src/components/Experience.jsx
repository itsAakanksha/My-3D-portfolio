import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { deployed } from "../assets";

const ExperienceCard = ({ experience, index }) => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: "linear-gradient(135deg, rgba(21, 16, 48, 0.9) 0%, rgba(16, 13, 37, 0.95) 100%)",
      color: "#fff",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "20px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(10px)"
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(21, 16, 48, 0.9)" }}
    date={
      <span className="text-white font-semibold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        {experience.date}
      </span>
    }
    iconStyle={{ 
      background: `linear-gradient(135deg, ${experience.iconBg} 0%, #1a1a2e 100%)`,
      border: "3px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full relative group">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[70%] h-[70%] object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    }
  >
    <div className="relative">
      {/* Header with enhanced styling */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-white text-[26px] font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            {experience.title}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-secondary text-[18px] font-semibold">
              {experience.company_name}
            </p>
          </div>
        </div>
        
        {/* Enhanced deployment link button */}
        <div 
          onClick={() => window.open(experience.link, "_blank")} 
          className='group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 w-12 h-12 rounded-xl flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/25'
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={deployed}
            alt='View Project'
            className='w-6 h-6 object-contain relative z-10 filter brightness-0 invert group-hover:scale-110 transition-transform duration-300'
          />
          
          {/* Tooltip */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black-100 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            View Project
          </div>
        </div>
      </div>

      {/* Enhanced experience points */}
      <div className="mt-6">
        <ul className="space-y-3">
          {experience.points.map((point, pointIndex) => (
            <li
              key={`experience-point-${pointIndex}`}
              className="flex items-start gap-3 group"
            >
              <p className="text-white-100 text-[15px] leading-relaxed tracking-wide group-hover:text-white transition-colors duration-300">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 rounded-full"></div>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      {/* Enhanced header section */}
      <motion.div variants={textVariant()} className="text-center md:text-left">
        <p className={`${styles.sectionSubText} bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold tracking-widest`}>
          MY JOURNEY
        </p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent relative`}>
          Work Experience
          <span className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
        </h2>
        
        {/* Subtitle */}
        <motion.p 
          variants={textVariant(0.2)}
          className="mt-6 text-secondary text-[18px] max-w-3xl leading-relaxed"
        >
          Discover the professional experiences that have shaped my expertise in web development, 
          from innovative startups to established companies.
        </motion.p>
      </motion.div>

      {/* Enhanced timeline container */}
      <div className="mt-20 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-transparent"></div>
        </div>
        
        <div className="relative">
          <VerticalTimeline
            lineColor="rgba(147, 51, 234, 0.2)"
          >
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
            ))}
          </VerticalTimeline>
        </div>
        
        {/* Bottom decoration */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
