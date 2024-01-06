import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import conf from '.././conf/conf.js'


const Contact = () => {
 
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({...form, [name]:value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
      
    emailjs.send(
      conf.serviceId,
      conf.templateId,
      {
       from_name : form.name,
       to_name:'Aakanksha',
       from_email:form.email,
       to_email:"aakansha.7079@gmail.com",
       message:form.message,
      },
      conf.publicKey
    )
    .then(()=>{
      setLoading(false);
      alert('ThankYou. I will get back to you soon as possible');

      setForm({
        name:"",
        email:"",
        message:"",
      },
      (error)=>{
        setLoading(false)
        console.log(error)
        alert('something went wrong')
      }
      )
    })
  };



  return (
    <div className="xl: mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText} `}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col mt-12 gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Enter your Name"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Enter your Email"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              placeholder="Write a message"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="Submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
      <EarthCanvas/>
      
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
