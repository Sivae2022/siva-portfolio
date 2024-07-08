import  web from '../assets/projects/Eommerce.jpg'
import job from "../assets/projects/job.jpg";

import project3 from "../assets/projects/project-3.jpg";

import music from "../assets/projects/music.jpg";
export const HERO_CONTENT = `Hi, I'm Siva, a passionate and dedicated 2nd-year Computer Science student at Sri Eshwar College Of Engineering. With a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic, responsive, and user-friendly web applications. My journey in the world of programming started early on, and since then, I have honed my skills in full-stack development through various projects and freelance work.`;

export const ABOUT_TEXT = `As a freelancer, I have successfully delivered several projects for clients, ranging from small businesses to personal websites. I am always eager to take on new challenges and am continuously learning to stay up-to-date with the latest industry trends and technologies. My goal is to leverage my skills to solve real-world problems and contribute to impactful projects.`;



export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: web,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "Tailwind CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Job Portal Website",
    image: job,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "Tailwind CSS", "React","Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React"],
  },
  {
    title: "Music Management System",
    image: music,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Java", "Javafx", "JDBC"],
  },
];


