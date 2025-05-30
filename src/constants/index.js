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
    tunify,
    mealPlanner,
    fitnesTracker,
    localConnector,
    usermanagement,
    feedbackfeat,
    emailClient,
    ytlivechat,

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
      title: "FullStack Developer",
      company_name: "Videoit.io",
      // icon: ,
      iconBg: "#383E56",
      date: "June 2024 - Present",
      points: [
        "Engineered a video shopping application integrated with Shopify, enhancing product engagement through interactive video experiences. ",
        "Developed a Shopify App extension using React.js",
        "Designed and embedded custom analytics dashboards, empowering merchants to gain deep insights into customer behavior and video performance",
      ],
      link:"https://videoit.io/",
    },
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
      link:"https://gyaanta.netlify.app"
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
      name: "Local Connector",
      description:
        "A full-stack social platform enabling neighborhood communities to share posts, recommendations, and events. Features real-time interactions, location-based filtering, user authentication, and responsive design. Includes dark/light theme switching and mobile-optimized interface for seamless community engagement. Users can create posts, reply to discussions, and discover local content.",
   
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "node js",
          color: "purple-text-gradient",
        },
        {
          name: "express js",
          color: "orange-text-gradient",
        },
        {
          name: "mongo db",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: localConnector,
      source_code_link: "https://github.com/itsAakanksha/Local_Connector",
      deployed_link:"https://local-connector.vercel.app/",
    },
    {
      name: "Fitness Tracker Dashboard",
      description:
        "The Fitness Tracker Dashboard is a web application that allows users to track their fitness activities, set goals, and monitor their progress over time. The dashboard provides a user-friendly interface for logging workouts, viewing statistics, and receiving personalized recommendations.",
   
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: fitnesTracker,
      source_code_link: "https://github.com/itsAakanksha/FitTracker-",
      deployed_link:"https://fit-tracker-ecru.vercel.app/",
    },
    {
      name: "Ai Powered Meal Planner",
      description:
        "The AI-Powered Meal Planner is a web application that utilizes artificial intelligence to generate personalized meal plans based on user preferences, dietary restrictions, and nutritional goals. The application provides a user-friendly interface for users to input their preferences and receive tailored meal suggestions.",
   
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node js",
          color: "purple-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        }, 
        {
          name: "vector DB (postgres)",
          color: "pink-text-gradient",
        },
      ],
      image: mealPlanner,
      source_code_link: "https://github.com/itsAakanksha/Meal_Planner_assistent.-",
      deployed_link:"",
    },
    {
      name: "Email Client App",
      description:
        "The Email Client App is a web application that allows users to manage their email accounts. The application provides features such as sending, receiving, and organizing emails, as well as managing contacts and calendars.",
      tags: [
        {
          name: "T3 Stack",
          color: "blue-text-gradient",
        },
        {
          name: "Node js",
          color: "purple-text-gradient",
        },
        {
          name: "shadcn",
          color: "violet-gradient",
        }, 
        {
          name: "neon DB",
          color: "pink-text-gradient",
        },
      ],
      image: emailClient,
      source_code_link: "https://github.com/itsAakanksha/Email_Client_App-",
      deployed_link:"",
    },
    {
      name: "Youtube Live Chat",
      description:
        "The Youtube Live Chat is a web application that allows users to interact with live streams on Youtube. The application provides features such as sending messages, viewing messages from other users, and managing chat settings.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node js",
          color: "purple-text-gradient",
        },
      
      ],
      image: ytlivechat,
      source_code_link: "https://github.com/itsAakanksha/youtube-Livechat",
      deployed_link:"https://youtube-livechat.vercel.app/",
    },
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
      name: "Usermanagement",
      description:
        " Admins effortlessly create user accounts, while new users enjoy secure logins.  Personalize dashboards with profile pictures and names.  Admins maintain control with account verification and deletion. It Secure, user-friendly access management. ",
      tags: [
        {
          name: "ejs",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: usermanagement,
      source_code_link: "https://github.com/itsAakanksha/Admin-Managed-User-Access-and-image-cropping",
      deployed_link:"https://user-managementt.onrender.com/",
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
      name: "Feedback Feature",
      description:
        "The Feedback Feature is a web application that allows users to provide feedback on various topics. It provides an intuitive interface for users to submit their feedback and view responses from the admin. The application is built using React.js and utilizes Redux Toolkit for state management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
       
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: feedbackfeat,
      source_code_link:"https://github.com/itsAakanksha/Feedback-Feature",
      deployed_link: "https://feedback-feature-ten.vercel.app/",
    },
    // {
    //   name: "Gift Shop",
    //   description:
    //     "The Gift Shop is an application built on React js and python where you can choose gifts for your loved ones. AI will provide recommendations based on your preferences.",
    //   tags: [
    //     {
    //       name: "React js",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: giftshop,
    //   source_code_link: "https://github.com/itsAakanksha/my-gift-shop",
    //   deployed_link:"https://aigiftshop.netlify.app/"
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };