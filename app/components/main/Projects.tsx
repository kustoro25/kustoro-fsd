import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const projects = [
    {
      src: "/netflix.webp",
      link: "https://github.com/kustoro25/netflix-clone",
      title: "Netflix Clone",
      description:
        "Integrated TMDB API for movie and series data, Implemented custom video player with playback controls, Applied responsive design and lazy loading for performance optimization",
    },
    {
      src: "/wpu.png",
      link: "https://github.com/kustoro25/wpu-acara",
      title: "Acara - WPU course",
      description:
        "Developed end-to-end event management application with ticketing system , Built automated email reminders and confirmations, Created analytics dashboard for attendance tracking and feedback ",
    },
    {
      src: "/harisenin.png",
      link: "https://github.com/kustoro25/Mission-2-advanced-HariSenin",
      title: "Video Belajar - Bootcamp Mission",
      description:
        "Developed learning platform with user roles (student, instructor, admin) , Implemented video streaming with adaptive bitrate and progress tracking , Created learning progress dashboard with basic analytics ",
    },
    {
      src: "/vuestore.png",
      link: "https://vuestore-rho.vercel.app/",
      title: "VueStore E-commerce Platform",
      description:
        "Integration of REST API with Axios, Responsive UI/UX with modular component design, Product ratings and reviews",
    },
    {
      src: "/porto.png",
      link: "https://kustoro-fsd.vercel.app/",
      title: "Portfolio Website",
      description:
        "Implemented animations and micro-interactions for enhanced UX, Applied responsive design and lazy loading for performance optimization ",
    },
  ];

  return (
    <div className="justify-center items-center flex flex-col">
      <section
        className="flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
        id="projects"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8 sm:py-12 lg:py-16 text-center">
          My Projects
        </h1>
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-2 sm:px-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                src={project.src}
                link={project.link}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
