import React from "react";
import HeroContent from "../sub/HeroContent";

function Hero() {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-310 absolute top-[-40px] sm:top-[40px] lg:top-[-340px] left-0 z-[1] w-full h-auto min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] object-cover"
      >
        <source src="/neon.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <HeroContent />
    </div>
  );
}

export default Hero;
