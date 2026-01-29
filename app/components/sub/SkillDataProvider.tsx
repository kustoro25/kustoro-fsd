"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface props {
  src: string;
  width: number;
  height: number;
  index: number;
}

function SkillDataProvider({ src, width, height, index }: props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{
        delay: index * animationDelay,
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.3 },
      }}
      className="relative group"
    >
      <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/5 group-hover:border-purple-500/30 transition-all duration-300">
        <Image
          src={src}
          width={width * 0.8}
          height={height * 0.8}
          alt="skill image"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
        />
      </div>
    </motion.div>
  );
}

export default SkillDataProvider;
