"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg border border-[#2A0E61] hover:border-purple-500 transition-all duration-300 group"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
          <Image
            src={src}
            alt={title}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
            <div className="flex items-center gap-2 text-white text-sm">
              <span>View Project</span>
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-b from-[#030014] to-[#0a0a2a]">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
              {title}
            </h1>
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400 group-hover:text-purple-300 transition-colors duration-200" />
          </div>
          <p className="text-gray-300 text-sm sm:text-base">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
