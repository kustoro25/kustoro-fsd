"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/app/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className=" flex flex-row lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-20 mt-24 sm:mt-32 lg:mt-40 w-full z-20 relative"
    >
      <div className="h-full w-full max-w-6xl flex flex-col gap-3 sm:gap-4 lg:gap-5 justify-center m-auto text-start lg:w-1/2">
        {/* <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-2 px-2 sm:py-2 sm:px-3 lg:py-[8px] lg:px-[7px] border border-[#7042f88b] opacity-[0.9] w-fit"
        ></motion.div> */}

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              About Me
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base lg:text-lg text-gray-400 my-3 sm:my-4 lg:my-5 max-w-[600px]"
        >
          I believe that the blend of discipline and curiosity is the key to
          growth. After graduating with honors from{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            SMK Negeri 1 Brebes,
          </span>{" "}
          I chose to sharpen my practical skills through the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Harisenin Bootcamp,
          </span>
          where I learned to manage projects to industry standards. Beyond that,
          I regularly experiment with new technologies to enrich my portfolio. I
          am now seeking opportunities to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            apply my technical
          </span>{" "}
          expertise and adaptive mindset within a dynamic work environment.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 sm:py-3 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] sm:max-w-[200px] hover:scale-105 transform transition-transform duration-200"
        >
          <a
            href="./Kustoro_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume block w-full h-full py-2"
          >
            <span className="resume-button__text text-sm sm:text-base">
              VIEW RESUME
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 h-full flex justify-center items-center mt-8 lg:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={500}
          width={500}
          className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[650px] xl:h-[650px]"
          priority
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
