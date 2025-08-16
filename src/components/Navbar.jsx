import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ${
        scrolled 
          ? "bg-black-100/80 backdrop-blur-md border-b border-white/10 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Enhanced Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Animated Logo Container */}
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-xl">A</span>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            {/* Floating particles */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-75"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-75 delay-300"></div>
          </div>
          
          <div className="flex flex-col">
            <motion.p 
              className="text-white text-[20px] font-bold cursor-pointer bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Aakanksha
            </motion.p>
            <span className="text-secondary text-[10px] font-medium tracking-wider uppercase">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Enhanced Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              className="relative group"
            >
              <a
                href={`#${link.id}`}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer transition-colors duration-300 relative z-10`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
                
                {/* Animated underline */}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                  active === link.title ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Enhanced Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <div 
              className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              onClick={() => setToggle(!toggle)}
            >
              <motion.img 
                src={toggle ? close : menu} 
                alt="Menu" 
                className="w-[20px] h-[20px] object-contain filter brightness-0 invert"
                animate={{ rotate: toggle ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Enhanced Mobile Menu Dropdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ 
              opacity: toggle ? 1 : 0, 
              scale: toggle ? 1 : 0.8,
              y: toggle ? 0 : -20
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`${!toggle ? 'pointer-events-none' : 'pointer-events-auto'} 
            absolute top-16 right-0 min-w-[200px] bg-black-100/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ 
                    x: toggle ? 0 : 20, 
                    opacity: toggle ? 1 : 0 
                  }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="group"
                >
                  <a
                    href={`#${link.id}`}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-medium cursor-pointer text-[16px] hover:text-white transition-colors duration-300 flex items-center gap-3 p-2 rounded-lg hover:bg-white/5`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Mobile menu decoration */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Navbar bottom glow effect */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      )}
    </motion.nav>
  );
};

export default Navbar;
