import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import {services} from '../constants'
import  {fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon})=>{
 return (
  <Tilt className = "xs:w-[250px] w-full">
  <motion.div variants={fadeIn("right", "spring", 0.5 * index , 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '>
   <div
    options = {{
      max:45,
      scale:1,
      speed:45
    }}
    className='bg-tertiary rounded-[20px] px-5 py-12 min-h-[280px] flex flex-col justify-evenly items-center'
   >
   <img src={icon} alt="title" className='w-10 h-10 object-contain' />
   <h3 className='text-white text-[20px] font-bold text-center '>
   {title}
   </h3>
   </div>
  </motion.div>
  
  </Tilt>
 )
}
const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
   <p className={`${styles.sectionSubText}`}>Introduction</p>
   <h2 className={`${styles.sectionHeadText} `}>Overview.</h2>
   </motion.div>
   <motion.p variants={fadeIn("","",0.1,1)} className='text-secondary mt-4 text-[17px] max-w-3xl leading-[30px]' >
   I am skilled Fullstack Developer, I love to build user interfaces and web applications. i have some experiences in frameworks like react js, node js.
   </motion.p>


   <div className='mt-20 flex flex-wrap gap-10'>
   {services.map((service,index)=>(
    <ServiceCard key={service.title} index={index} {...service}/>
   ))}
   </div>
   </>
  )
}

export default  SectionWrapper(About,"about");