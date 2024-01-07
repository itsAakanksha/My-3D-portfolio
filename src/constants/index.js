import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    cpp,
    python,
    mysql,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    baoiam,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    giftshop,
    blogbust,
    tunify
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Web Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "C++",
      icon: cpp,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Baoiam pvt ltd",
      icon: baoiam,
      iconBg: "#383E56",
      date: "June 2023 - Sept 2023",
      points: [
        "Developing  an Edtech web applications using React.js and other related technologies.",
        "Built the Hireus,Course and Courses page from scratch",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      link:"https://gyaanta.netlify.app/hireus"
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tunify",
      description:
        "Tunify is a web application developed using PHP that allows users to play, upload, and download music. The application provides an intuitive user interface to manage and enjoy a collection of music tracks",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tunify,
      source_code_link: "https://github.com/itsAakanksha/Tunify/",
      deployed_link:"https://musixtunify.000webhostapp.com/",
    },
    {
      name: "BlogBust",
      description:
        "BlogBust is a full-stack React.js application that empowers users to seamlessly read, create, and edit blogs. The app integrates with Appwrite for user authentication and employs Redux Toolkit for state management. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blogbust,
      source_code_link: "https://github.com/itsAakanksha/Blog-App",
      deployed_link:"https://blog-app-d5ob.vercel.app/"
    },
    {
      name: "Gift Shop",
      description:
        "The Gift Shop is an application built on React js and python where you can choose gifts for your loved ones. AI will provide recommendations based on your preferences.",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: giftshop,
      source_code_link: "https://github.com/itsAakanksha/my-gift-shop",
      deployed_link:"https://aigiftshop.netlify.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };