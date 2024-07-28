/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sonu Singh Jatav",
  title: "Hi all, I'm Sonu",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience in Backend Development and expert in building Web applications using Java / Spring Boot / JavaScript / React JS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1scj8GnSXRy3ghK5xsZT0zvP5wZUfkg-9/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sonu8476",
  linkedin: "https://www.linkedin.com/in/sonu-singh-jatav-60266721b/",
  gmail: "sonusinghjatav6@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/sonu.singhjatav.547/",
  instagram: "https://www.instagram.com/sonu_singh_jatav._/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do ?",
  subTitle: "CRAZY FULL STACK JAVA DEVELOPER HAVING PROFIENCY IN WRITING OPTIMIZED CODE , DB QUERIES FOR DEVELOPING HIGH PERFORMANCE REST APIS AND REUSABLE CLEAN CODE FOR UI DEVELOPMENT .",
  skills: [
    emoji(
      "⚡ Develop highly optimized Back end for your web applications"
    ),
    emoji("⚡ Microservice Architechture development"),
    emoji(
      "⚡ Integration of third party services such as OIDC / AWS / OAuth2"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fas fa-seedling"
    },
    
    {
      skillName: "AWS DynamoDB",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "MySQL DB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Spring Security",
      fontAwesomeClassname: "fab fas fa-seedling"
    },
   
    {
      skillName: "Agile",
      fontAwesomeClassname: "fab fa-sass"
    },
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RGPV University , Bhopal",
      logo: require("./assets/images/rgpv image.png"),
      subHeader: "Bachelor of Technology in Electrical & Electronics Engg.",
      duration: "June 2020 - May 2023",
      desc: "Participated in many web development and coding competitions",
      descBullets: [
        "Academic topper",
        "Tech Enthusiast"
      ]
    },
    {
      schoolName: "SV Polytechnic College",
      logo: require("./assets/images/SVPC.jpeg"),
      subHeader: "Diploma in Electrical Engineering",
      duration: "July 2017 - May 2020",
      desc: "I was the Sports Secretary of the college and also the branch topper. I organized the annual sports single-handedly at the college level and volunteered for the annual function as a college council member."
      ,
      descBullets: ["Sports secretary of the collge","NCC C certificate holder","Academic topper"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "API Design", //Insert stack or technology you have experience in
      progressPercentage: "97%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Database",
      progressPercentage: "90%"
    },
    {
      Stack: "UI Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Deployment",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Netlink Software",
      companylogo: require("./assets/images/netlinklogo.jpeg"),
      date: "July 2024 – Present",
      desc: "Responsible for implementing robust security measures for microservices, including authentication and encryption protocols, and integrating Redis for efficient cache management to enhance application performance. My role involves troubleshooting and resolving complex technical issues, collaborating with business analysts and stakeholders to refine project requirements, and ensuring high software quality through unit and integration testing. I actively participate in code reviews, stay updated with emerging technologies, and adhere to Agile methodologies and organizational coding standards, always keeping the end-user experience at the forefront of my development efforts.",
      color: "#cf734c"
    },
    {
      role: "Associate Software Engineer",
      company: "Netlink Software",
      companylogo: require("./assets/images/netlinklogo.jpeg"),
      date: "April 2023 – July 2024",
      desc: "Analyze and troubleshoot production-grade technical issues and bugs, utilizing expertise in microservices architecture, security protocols, and Redis for cache management. My role involves writing and executing unit and integration tests to ensure software quality, performing complex database queries, and using JPA for efficient data persistence. I actively participate in code reviews to identify and fix defects, and stay updated on emerging technologies and industry trends. Adhering to Agile, Scrum, or Kanban methodologies, I follow organizational coding standards and quality assurance processes, always prioritizing the end-user experience in my software development efforts.",
      color: "#49734c"
    },
    {
      role: "Java Developer Trainee",
      company: "Netlink Softwares",
      companylogo: require("./assets/images/netlinklogo.jpeg"),
      date: "November 2022 – April 2023",
      desc: "Worked as a full-time Java Full Stack Developer, I specialize in writing clean, efficient, and maintainable code while following best practices. I collaborate on designing, developing, testing, and deploying software solutions, and implement new features, enhancements, and bug fixes. My role includes performing DynamoDB queries, debugging with CloudWatch, and improving code quality using SonarQube. I manage code changes with Git, utilize JIRA and Kanban for project management, and apply frameworks and libraries to ensure high-performance software development.",
      color: "#5e9dad"
    } 
    // ,
    // {
    //   role: "Java Developer Intern",
    //   company: "Netlink Softwares",
    //   companylogo: require("./assets/images/netlinklogo.jpeg"),
    //   date: "July 2022 – October 2022",
    //   desc: "Explore Java web development frameworks such as Java EE and Spring Frameworks ( Spring Boot , Spring MVC). Understand the MVC architecture, dependency injection, Spring Security, and building RESTful APIs.",
    //   descBullets: [
    //     "Build Tools and Dependency Management",
    //     "Version Control",
    //     "Software Development Life Cycle",
    //     "IDE Proficiency such as IntelliJ- Idea , Postman , GIT , Bitbucket"
    //   ],
    //   color: "#cf734c"
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PRODUCT'S AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Blossom.jpeg"),
      projectName: "Blossom EMR",
      projectDesc: "Blossom Children's Center is an interdisciplinary clinic specializing in early intervention for children with autism spectrum disorder and special needs . In this project, we developed a comprehensive solution for Blossom's, providing dynamic functionalities for arranging therapy sessions and scheduling appointments for children with mental or physical challenges. I implemented OAuth 2 Spring Security with a microservices architecture for robust role-based access control and developed modules for appointment scheduling, session management, and billing. This solution ensures streamlined operations and secure, efficient management of therapeutic services.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blossomchildrenscenter.com/"
        }
      ]
    }
    ,
    {
      image: require("./assets/images/siriusXm.png"),
      projectName: "Sirius XM Connected Vehicle",
      projectDesc: "This project is made to provide various services to the user (Vehicle Owner) such as a suite of safety, security, and convenience services including automatic crash notification, enhanced roadside assistance, remote door unlock, remote start, stolen vehicle recovery. Contains 7 microservice's include spring cloud gateway to provide specific route's Job and OIDC for SSO , in this project I Developed async api end to end , integrated client side REST and SOAP APIs, Writing test cases for api's by latest testing framework such as Junit5 , Mockito",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.siriusxmcvs.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/siriusXm.png"),
      projectName: "Sirius XM Connected Vehicle ( Training Module )",
      projectDesc: "This project is made to simulate the functionalities and UserInterface of SXM Connected Vehicles Application for the training purpose of Agents before they actually interact with main application . In this project ,i established the whole microservice architechture including gateway and OIDC for SSO , and  mock or simulate the APIS and corresponding events generated in response of actual API call to simulate the functionalities on the UI and Wrote test cases for api's by latest testing framework such as Junit5 , Mockito",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.siriusxmcvs.com/"
        }
      ]
    }
  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Reactive Mircroservices using Spring Webflux",
      subtitle:
        "Certified in developing reactive microservices using Spring boot/Spring webflux and reactive programming.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy",
      footerLink: [
        {
          name: "Certification",
          url: "http://ude.my/UC-c3ac113e-7707-4be3-8023-db3fa0ae7ded"
        }
        // ,
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "MERN Stack Development",
      subtitle:
        "Certified MERN Stack Developer.",
      image: require("./assets/images/Sheryians.png"),
      imageAlt: "Sheryians",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1uulx9Syy5Qzi3pzK4ItQ_t7cG4tbjh0u/view?usp=drivesdk"
        }
      ]
    },

    // {
    //   title: "MS Excel Advance",
    //   subtitle: "Completed MS Excel Advance training organized by finesse(Netlink)",
    //   image: require("./assets/images/netlinklogo.jpeg"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     // {name: "Certification", url: ""},
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/1SvWI-HulSON7r5SBeq9ZIRBeYcwaRVPC/view?usp=drivesdk"
    //     }
    //   ]
    // },

    {
      title: "Best Team Award",
      subtitle: "Awarded as Best Team of the organization",
      image: require("./assets/images/netlinklogo.jpeg"),
      imageAlt: "Netlink",
      footerLink: [
        // {name: "Certification", url: ""},
        {
          name: "Awards",
          url: "https://drive.google.com/file/d/13dMR2KQ83E0W_XjnQGIRNuwnS-B7RZ8A/view?usp=drivesdk"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      // url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "How OIDC (Open ID Connect) works ?",
      description:
        "Coming soon..."
    },
    {
      // url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "What is dependency injection and its types ?",
      description:
        "Coming soon..."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9340994465",
  email_address: "sonusinghjatav6@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
