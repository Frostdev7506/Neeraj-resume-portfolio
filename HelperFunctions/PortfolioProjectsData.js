import lyrics from "../public/lyrics.png";
import bootcamp from "../public/bootcamp.png";
import imagegenerator from "../public/image-generator.png";
import web4 from "../public/web4.png";
import GreattrMerchant from "../public/GreattrMerchant.png";
import GreattrLandingPage from "../public/GreattrLandingPage.png";

import student from "../public/student.png";
const projects = [
  {
    image: lyrics,
    altText: "Lyriks Music Streaming application",
    link: "https://github.com/Frostdev7506/Lyriks",
    title: "Lyriks (Music Streaming application)",
    technologies: ["React", "JavaScript", "API", "Express"],
    colors1: ["cyan", "cyan", "cyan", "cyan"],
    colors2: ["teal", "teal", "teal", "teal"],
    description:
      "Music streaming application created using React and Shazam-core Api.",
  },
  {
    image: bootcamp,
    altText: "Frontend-Webdevelopment-Bootcamp",
    link: "https://github.com/Frostdev7506/Frontend-Webdevelopment-Bootcamp",
    title: "Web Development Bootcamp",
    technologies: ["React", "JavaScript", "Mapbox API", "Express"],
    colors1: ["cyan", "cyan", "cyan", "cyan"],
    colors2: ["teal", "teal", "teal", "teal"],
    description: "A landing Page for a Web-Development Bootcamp. Created using react and Mapbox API.",
  },
  {
    image: imagegenerator,
    altText: "OpenAI Image Generator",
    link: "https://github.com/Frostdev7506/open-AI-Image-Generator",
    title: "OpenAI Image Generator",
    technologies: ["React", "JavaScript", "OpenAI", "Express"],
    colors1: ["cyan", "cyan", "cyan", "cyan"],
    colors2: ["teal", "teal", "teal", "teal"],
    description:
      "This is a simple image generator built with Node.js and Express that uses OpenAI Dall-E AI-model to generate images.",
  },
  {
    image: student,
    altText: "Student Attendance Application",
    link: "https://github.com/Frostdev7506/mern-crud-student-attendance",
    title: "Student Management Application",
    technologies: ["React", "JavaScript", "Mysql", "Express"],
    colors1: ["cyan", "cyan", "cyan", "cyan","cyan","cyan"],
    colors2: ["teal", "teal", "teal", "teal", "teal","teal"],
    description:
      "Mern stack Application for teachers to keep track of students attendance and also decide teacher's schedule and personalize student's learning experience.",
  },
  {
    image: GreattrMerchant,
    altText: "Greattr For Merchants",
    link: "https://play.google.com/store/apps/details?id=com.merchantnative&hl=en_IN",
    title: "Greattr For Merchants",
    technologies: ["React", "JavaScript", "REST API", "Express", "Node.js", "MSSQL", "Socket.io"],
    colors1: ["cyan", "cyan", "cyan", "cyan","cyan","cyan"],
    colors2: ["teal", "teal", "teal", "teal", "teal","teal"],
    description:"Application for MSMEs, allowing merchants to offer customers flexible and transparent loan options for purchases",
  },
  {
    image: GreattrLandingPage,
    altText: "Greattr Landing Page",
    link: "https://www.greattr.com",
    title: "Landing Page for Greattr Application",
    technologies: ["React", "JavaScript", "REST API", "Express", "Node.js", "MSSQL", "Socket.io"],
    colors1: ["cyan", "cyan", "cyan", "cyan","cyan","cyan"],
    colors2: ["teal", "teal", "teal", "teal", "teal","teal"], 
    description:"Landing page built using MERN stack with Merchant Registration and using KYC functinality usings OKYC Aadhar Verification.",
  },
  // Add more projects here...
];

export default projects;
