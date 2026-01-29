import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const projects = [
    {
      src: "/netflix.webp",
      link: "https://github.com/kustoro25/netflix-clone",
      title: "Netflix Clone",
      description:
        "Using TMDB data, Firebase authentication for the watchlist, and responsive search features.",
    },
    {
      src: "/wpu.png",
      link: "https://github.com/kustoro25/wpu-acara",
      title: "Acara - WPU course",
      description:
        "Platform event using Next.js and HeroUI, a role-based NextAuth system, and responsive design.",
    },
    {
      src: "/harisenin.png",
      link: "https://github.com/kustoro25/Mission-2-advanced-HariSenin",
      title: "Video Belajar - Bootcamp Mission",
      description:
        "Educational video platform with React, an auth system, and responsive UI.",
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
      <video
        autoPlay
        muted
        loop
        playsInline
        className=""
        style={{ transform: "rotate(0deg)" }}
      >
        <source src="/review.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Projects;
