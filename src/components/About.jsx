import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import {services} from '../constants'
import  {fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon})=>{
 return (
  <Tilt className = "xs:w-[250px] w-full group">
  <motion.div 
    variants={fadeIn("right", "spring", 0.5 * index , 0.75)} 
    className='w-full relative overflow-hidden rounded-[20px] shadow-card hover:shadow-2xl transition-all duration-500'
  >
    {/* Animated background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Glowing border effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-blue-500/50 rounded-[20px] p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="w-full h-full bg-tertiary rounded-[20px]"></div>
    </div>
    
    {/* Main card content */}
    <div
      options = {{
        max:45,
        scale:1,
        speed:45
      }}
      className='relative bg-tertiary rounded-[20px] px-6 py-12 min-h-[280px] flex flex-col justify-center items-center border border-white/5 backdrop-blur-sm group-hover:border-white/20 transition-all duration-500'
    >
      {/* Icon container with enhanced styling */}
      <div className="relative mb-6 group-hover:scale-110 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        <div className="relative bg-black-100 p-4 rounded-full border border-white/10 group-hover:border-white/30 transition-colors duration-500">
          <img src={icon} alt={title} className='w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-500' />
        </div>
      </div>
      
      {/* Title with enhanced typography */}
      <h3 className='text-white text-[20px] font-bold text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500'>
        {title}
      </h3>
      
      {/* Subtle description or call to action */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center">
        <p className="text-gray-400 text-sm">Specialized expertise</p>
        <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full"></div>
      </div>
    </div>
  </motion.div>
  </Tilt>
 )
}
const About = () => {
  return (
   <>
   {/* Header Section with Enhanced Typography */}
   <motion.div variants={textVariant()} className="text-center md:text-left">
     <p className={`${styles.sectionSubText} bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold tracking-widest`}>
       INTRODUCTION
     </p>
     <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent relative`}>
       Overview
       <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
     </h2>
   </motion.div>

   {/* Enhanced Description with Better Typography */}
   <motion.div 
     variants={fadeIn("","",0.1,1)} 
     className='mt-8 relative'
   >
     <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
     <div className="relative bg-black-200/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
       <p className='text-secondary text-[18px] max-w-4xl leading-[32px] font-light tracking-wide'>
         I am a <span className="text-white font-semibold">passionate and skilled Web Developer</span> with a love for crafting 
         exceptional user interfaces and robust web applications. My expertise spans across modern 
         <span className="text-purple-400 font-medium"> React.js</span> and 
         <span className="text-green-400 font-medium"> Node.js</span> frameworks, bringing ideas to life through clean, 
         efficient code and innovative design solutions.
       </p>
       
       {/* Stats or highlights */}
       <div className="flex flex-wrap gap-6 mt-6">
         <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
           <span className="text-sm text-gray-400">Frontend Specialist</span>
         </div>
         <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
           <span className="text-sm text-gray-400">Full-Stack Developer</span>
         </div>
         <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
           <span className="text-sm text-gray-400">GenAi Developer</span>
         </div>
       </div>
     </div>
   </motion.div>

   {/* Enhanced Services Grid */}
   <div className='mt-20'>
     <motion.h3 
       variants={fadeIn("up","",0.2,1)}
       className="text-white text-[24px] font-bold mb-10 text-center"
     >
       What I Do
     </motion.h3>
     <div className='flex flex-wrap justify-center gap-10'>
       {services.map((service,index)=>(
         <ServiceCard key={service.title} index={index} {...service}/>
       ))}
     </div>
   </div>
   </>
  )
}

export default  SectionWrapper(About,"about");