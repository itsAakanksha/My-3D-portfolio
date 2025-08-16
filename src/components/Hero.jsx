import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 120, -120, 0],
            y: [0, -80, 80, 0],
            scale: [1, 1.5, 0.5, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Parallax Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Enhanced Side Decoration */}
        <motion.div 
          className="flex flex-col justify-center items-center mt-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(147, 51, 234, 0.5)",
                "0 0 40px rgba(219, 39, 119, 0.7)",
                "0 0 20px rgba(147, 51, 234, 0.5)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent"
            initial={{ height: 0 }}
            animate={{ height: window.innerWidth > 640 ? 320 : 160 }}
            transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        {/* Enhanced Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Animated Greeting */}
          <motion.div
            variants={textVariants}
            custom={0}
            className="mb-4"
          >
            <span className="text-secondary text-lg font-medium tracking-wider">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading with Enhanced Animation */}
          <motion.h1 
            variants={textVariants}
            custom={1}
            className={`${styles.heroHeadText} text-white relative`}
          >
            Hi, I am{" "}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Aakanksha
            </motion.span>
            
            {/* Floating Elements around name */}
            <motion.div
              className="absolute -top-4 -right-8 w-4 h-4 bg-purple-400 rounded-full opacity-70"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-8 -left-6 w-3 h-3 bg-pink-400 rounded-full opacity-60"
              animate={{
                x: [0, 20, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p 
            variants={textVariants}
            custom={2}
            className={`${styles.heroSubText} mt-6 text-white-100 max-w-3xl leading-relaxed`}
          >
            <span className="font-semibold text-white">Innovative Full-Stack Developer</span> with expertise in 
            building scalable web applications that deliver{" "}
            <motion.span 
              className="text-purple-400 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              exceptional user experiences
            </motion.span>{" "}
            and measurable{" "}
            <motion.span 
              className="text-pink-400 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              business impact
            </motion.span>.
           
          </motion.p>

          {/* Enhanced Action Buttons */}
          <motion.div 
            variants={textVariants}
            custom={3}
            className="flex flex-wrap gap-4 mt-12"
          >
            <motion.a
              href="https://github.com/itsAakanksha"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border border-white/20 backdrop-blur-sm shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white group-hover:scale-110 transition-transform duration-300">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-white font-semibold">GitHub</span>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/aakankshakumarii/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border border-white/20 backdrop-blur-sm shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <svg className="w-5 h-5 fill-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 512 512">
                  <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/>
                </svg>
                <span className="text-white font-semibold">LinkedIn</span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-20  w-full flex justify-center items-center">
        <motion.a 
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="group"
        >
          <div className="w-[35px] h-[64px] justify-self-center rounded-3xl border-4 border-secondary/50 flex justify-center items-center p-2 group-hover:border-purple-500 transition-colors duration-300 bg-black/20 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 shadow-lg"
            />
          </div>
          <motion.p 
            className="text-secondary text-sm mt-2 text-center group-hover:text-white transition-colors duration-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
        </motion.a>
      </div>

      {/* Interactive cursor follower */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 opacity-20 blur-sm"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </section>
  );
};

export default Hero;
