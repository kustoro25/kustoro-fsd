"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import Skilltext from "../sub/Skilltext";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section
      className="flex flex-col items-center justify-center gap-3 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 h-full relative overflow-hidden"
      id="skills"
    >
      <Skilltext />

      {/* Skill categories with responsive spacing */}
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 text-center">
            Core Skills
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-3 sm:gap-4 lg:gap-5 items-center">
            {Skill_data.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 sm:mb-12"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 text-center">
            Frontend Technologies
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-3 sm:gap-4 lg:gap-5 items-center">
            {Frontend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 text-center">
            Backend Technologies
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-3 sm:gap-4 lg:gap-5 items-center">
            {Backend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Optional: Uncomment if needed */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 sm:mb-12"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 text-center">
            Full Stack
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-3 sm:gap-4 lg:gap-5 items-center">
            {Full_stack.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 text-center">
            Other Skills
          </h3>
          <div className="flex flex-row justify-center flex-wrap gap-3 sm:gap-4 lg:gap-5 items-center">
            {Other_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </motion.div> */}
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
