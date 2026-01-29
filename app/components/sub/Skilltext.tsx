"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/app/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

function Skilltext() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-4 sm:px-6">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-2 px-3 sm:py-[8px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4 sm:mb-6"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-4 w-4 sm:h-5 sm:w-5" />
        <h1 className="Welcome-text text-xs sm:text-sm lg:text-[13px]">
          Think better with Next.js 14
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] text-white font-medium mt-2 sm:mt-[10px] text-center mb-3 sm:mb-[15px] px-2"
      >
        Building applications with modern technologies
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 lg:mb-10 mt-2 sm:mt-[10px] text-center px-2"
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
}

export default Skilltext;
