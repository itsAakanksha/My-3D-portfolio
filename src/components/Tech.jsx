import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { 
  javascript, typescript, python, reactjs, nodejs, mongodb, 
  mysql, git, tailwind, redux, html, css, prisma, firebase, 
  langchain, langraph, n8n, appwrite, shopify, docker 
} from '../constants'
import { styles } from '../styles'
import { textVariant, fadeIn } from '../utils/motion'

// Comprehensive skill categories with your complete tech stack
const techCategories = {
  "Languages": [
    { name: "JavaScript", icon: javascript, level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "Python", icon: python, level: 88, color: "from-blue-500 to-yellow-400" },
    { name: "TypeScript", icon: typescript, level: 85, color: "from-blue-600 to-blue-400" },
    { name: "SQL", level: 82, color: "from-blue-700 to-indigo-500", fallback: "SQL" }
  ],
  "Frontend": [
    { name: "React JS", icon: reactjs, level: 92, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", level: 88, color: "from-gray-800 to-gray-600", fallback: "Next" },
    { name: "Redux Toolkit", icon: redux, level: 85, color: "from-purple-500 to-indigo-500" },
    { name: "Flutter", level: 40, color: "from-blue-400 to-cyan-300", fallback: "FL" },
    { name: "Tailwind CSS", icon: tailwind, level: 90, color: "from-teal-400 to-cyan-500" },
    { name: "React Query", level: 78, color: "from-red-500 to-orange-400", fallback: "RQ" }
  ],
  "Backend": [
    { name: "Node JS", icon: nodejs, level: 88, color: "from-green-500 to-emerald-500" },
    { name: "Express.js", level: 90, color: "from-gray-700 to-gray-500", fallback: "EX" },
    { name: "Prisma", icon: prisma, level: 82, color: "from-indigo-600 to-purple-500" },
    { name: "Feathers.js", level: 75, color: "from-orange-500 to-red-400", fallback: "FT" },
    { name: "Firebase", icon: firebase, level: 85, color: "from-yellow-500 to-orange-600" },
    { name: "Appwrite", icon: appwrite, level: 80, color: "from-pink-500 to-rose-400" }
  ],
  "Databases": [
    { name: "MongoDB", icon: mongodb, level: 85, color: "from-green-600 to-lime-500" },
    { name: "MySQL", icon: mysql, level: 88, color: "from-blue-600 to-indigo-500" },
    { name: "Redis", level: 78, color: "from-red-600 to-red-400", fallback: "RD" },
    { name: "PostgreSQL", level: 82, color: "from-blue-700 to-indigo-600", fallback: "PG" }
  ],
  "Agents and AI": [
    { name: "RAG", level: 85, color: "from-green-600 to-lime-500", fallback: "RAG" },
    { name: "Langchain", icon: langchain, level: 88, color: "from-blue-600 to-indigo-500" },
    { name: "Langraph", icon: langraph, level: 30, color: "from-red-600 to-red-400" },
    { name: "n8n", icon: n8n, level: 78, color: "from-red-600 to-red-400" },
  ],
  "Tools & Others": [
    { name: "Git", icon: git, level: 90, color: "from-orange-600 to-red-500" },
    { name: "OAuth 2.0", level: 85, color: "from-green-500 to-teal-400", fallback: "OA" },
    { name: "Clerk", level: 80, color: "from-purple-600 to-indigo-500", fallback: "CL" },
    { name: "Stripe", level: 88, color: "from-blue-500 to-purple-500", fallback: "ST" },
    { name: "Shopify", icon: shopify, level: 82, color: "from-green-600 to-emerald-500" },
    { name: "Docker", icon: docker, level: 70, color: "from-blue-400 to-blue-600" },
    { name: "Nginx", level: 78, color: "from-gray-600 to-gray-400", fallback: "NG" }
  ]
}

// Fallback icon component for skills without existing icons
const FallbackIcon = ({ text, color }) => (
  <div className={`w-full h-full bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
    {text}
  </div>
)

const ModernSkillCard = ({ skill, index, categoryIndex }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <div className="relative bg-black-200/50 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-3xl p-4 sm:p-6 hover:border-white/20 transition-all duration-500 overflow-hidden group-hover:scale-105">
        
        {/* Animated Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Floating Orb Effect */}
        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Icon Container */}
          <div className="relative mb-4 sm:mb-6 mx-auto w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-500">
            <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl sm:rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500`}></div>
            <div className="relative bg-black-100/80 backdrop-blur-sm p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors duration-500">
              {skill.icon ? (
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-500"
                />
              ) : (
                <FallbackIcon text={skill.fallback} color={skill.color} />
              )}
            </div>
          </div>
          
          {/* Skill Name */}
          <h4 className="text-white text-sm sm:text-lg font-bold mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
            {skill.name}
          </h4>
          
          {/* Skill Level */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-secondary text-xs sm:text-sm font-medium">Proficiency</span>
              <span className="text-white text-xs sm:text-sm font-bold">{skill.level}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="relative w-full h-1.5 sm:h-2 bg-black-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                initial={{ width: 0 }}
                animate={{ width: isVisible ? `${skill.level}%` : '0%' }}
                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
              >
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const CategorySection = ({ categoryName, skills, categoryIndex }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const categoryColors = {
    "Languages": { gradient: "from-yellow-500 to-orange-500", icon: "💻" },
    "Frontend": { gradient: "from-blue-500 to-cyan-500", icon: "🎨" },
    "Backend": { gradient: "from-green-500 to-emerald-500", icon: "⚙️" }, 
    "Agents and AI": { gradient: "from-pink-500 to-emerald-500", icon: "⚙️" }, 
    "Databases": { gradient: "from-purple-500 to-violet-500", icon: "🗄️" },
    "Tools & Others": { gradient: "from-orange-500 to-red-500", icon: "🛠️" }
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", categoryIndex * 0.2, 0.75)}
      className="mb-16"
    >
      {/* Enhanced Category Header */}
      <div 
        className="flex items-center justify-between mb-6 sm:mb-8 cursor-pointer group px-2 sm:px-0"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${categoryColors[categoryName].gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {categoryColors[categoryName].icon}
          </div>
          <div>
            <h3 className="text-white text-xl sm:text-3xl font-bold">
              {categoryName}
            </h3>
            <div className={`w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r ${categoryColors[categoryName].gradient} rounded-full mt-1`}></div>
          </div>
        </div>
        
        {/* Expand/Collapse Icon */}
        <div className={`text-white text-lg sm:text-2xl transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </div>
      </div>
      
      {/* Skills Grid with Animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isExpanded ? "auto" : 0, 
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <ModernSkillCard 
              key={skill.name} 
              skill={skill} 
              index={index}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

const Tech = () => {
  const totalSkills = Object.values(techCategories).flat().length
  const totalCategories = Object.keys(techCategories).length
  const averageLevel = Math.round(
    Object.values(techCategories).flat().reduce((sum, skill) => sum + skill.level, 0) / totalSkills
  )

  return (
    <>
      {/* Enhanced Header Section */}
      <motion.div variants={textVariant()} className="text-center mb-20">
        <p className={`${styles.sectionSubText} bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold tracking-widest mb-4`}>
          MY EXPERTISE
        </p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent relative mb-8`}>
          Technologies & Skills
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
        </h2>
        
        {/* Enhanced Subtitle */}
        <motion.p 
          variants={textVariant(0.2)}
          className="text-secondary text-lg max-w-4xl mx-auto leading-relaxed mb-12"
        >
          A comprehensive showcase of my technical expertise across the full development stack. 
          From frontend frameworks to backend services, databases to deployment tools.
        </motion.p>

        {/* Stats Cards */}
        <motion.div 
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="flex justify-center items-center gap-4 sm:gap-8 flex-wrap mb-12 sm:mb-16 px-4"
        >
          <div className="bg-black-200/50 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-purple-500/30 transition-colors duration-300 min-w-[100px] flex-1 max-w-[140px]">
            <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 sm:mb-2">
              {totalSkills}+
            </div>
            <div className="text-secondary text-xs sm:text-sm uppercase tracking-wide">Technologies</div>
          </div>
          
          <div className="bg-black-200/50 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-purple-500/30 transition-colors duration-300 min-w-[100px] flex-1 max-w-[140px]">
            <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2">
              {totalCategories}
            </div>
            <div className="text-secondary text-xs sm:text-sm uppercase tracking-wide">Categories</div>
          </div>
          
          <div className="bg-black-200/50 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:border-purple-500/30 transition-colors duration-300 min-w-[100px] flex-1 max-w-[140px]">
            <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1 sm:mb-2">
              {averageLevel}%
            </div>
            <div className="text-secondary text-xs sm:text-sm uppercase tracking-wide">Avg Proficiency</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Skills Categories */}
      <div className="relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative">
          {Object.entries(techCategories).map(([categoryName, skills], categoryIndex) => (
            <CategorySection
              key={categoryName}
              categoryName={categoryName}
              skills={skills}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech,"tech")