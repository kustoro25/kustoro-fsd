"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromTop } from "@/app/utils/motion";
import { Experience_data } from "@/constants";

function Experience() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 overflow-hidden"
      id="experience"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-auto h-full object-cover opacity-100 "
          style={{ transform: "rotate(0deg)" }}
        >
          <source src="/kotak.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay untuk meningkatkan kontras */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent z-1" />

      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="Welcome-box py-2 px-3 sm:py-3 sm:px-4 border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md opacity-90 mb-6 sm:mb-8 z-10"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        <h1 className="Welcome-text text-sm sm:text-base font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Work Experience
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 z-10 w-full max-w-7xl px-2 sm:px-4">
        {Experience_data.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.95, rotateY: 90 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateY: 0,
              transition: {
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              },
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              rotateY: -90,
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
            }}
            whileHover={{
              y: -4,
              scale: 1.02,
              rotateY: 5,
              borderColor: "rgba(112, 66, 248, 0.5)",
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            viewport={{ once: false, amount: 0.2 }}
            className="group relative flex flex-col rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-md border border-white/10 bg-gradient-to-br from-white/10 to-purple-500/10 transition-all duration-300 hover:shadow-lg sm:hover:shadow-2xl hover:shadow-purple-500/20"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* 3D effect wrapper */}
            <motion.div
              className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100"
              style={{ transform: "translateZ(-10px)" }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-3 sm:mb-4">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  {work.position}
                </h4>
                <p className="text-base sm:text-lg font-medium text-purple-300">
                  {work.company}
                </p>
              </div>

              <motion.div
                className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-3 sm:mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: index * 0.15 + 0.3, duration: 0.4 },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xs sm:text-sm font-medium text-cyan-300">
                  {work.date}
                </span>
              </motion.div>
            </div>

            {/* Rotating hover indicator */}
            <motion.div
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <div className="w-full h-full border border-transparent border-t-purple-500 border-r-cyan-500 sm:border-2 rounded-full" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Floating rotating elements */}
      {isClient && (
        <>
          <motion.div
            className="absolute left-4 sm:left-1/4 top-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl z-0"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute right-4 sm:right-1/4 bottom-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-2xl sm:blur-3xl z-0"
            animate={{
              opacity: [0.2, 0.4, 0.2],
              rotate: -360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </>
      )}
    </section>
  );
}

export default Experience;
