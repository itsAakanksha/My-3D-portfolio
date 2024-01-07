import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { deployed } from "../assets";

const ExperienceCard = ({ experience,dep_link }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836 ", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt="experience.company_name"
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    <div>
    <div className="flex justify-between">
    <h3 className="text-white text-[24px] font-bold ">{experience.title}</h3>
    <div onClick={()=>window.open(dep_link,"_blank")} 
    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
    >
    <img
    src={deployed}
    alt='deployed'
    className='w-1/2 h-1/2 object-contain '
    />
    </div>
    </div>
    <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const deployed_link = 'https://gyaanta.netlify.app/'
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What I have done in my previous internship
        </p>
        <h2 className={`${styles.sectionHeadText} `}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} dep_link = {deployed_link} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
