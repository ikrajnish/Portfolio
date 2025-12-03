import React from "react";
import me from "../assets/Me.png";

function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-black to-[#130428] text-white min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Bouncing Balls (background layer) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-30 left-14 w-10 h-10 bg-[#915EFF] rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-8 h-8 bg-[#FF6B6B] rounded-full animate-bounce delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-[#FFD93D] rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-10 right-1/3 w-7 h-7 bg-[#6BCB77] rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 right-5 w-5 h-5 bg-[#4D96FF] rounded-full animate-bounce delay-1000"></div>
      </div>

      {/* Main Content (foreground layer) */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-40 relative z-10">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={me}
            alt="Me"
            className="w-60 h-60 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Intro Text */}
        <div className="text-center md:text-left">
          <span className="block text-2xl text-gray-300">Hello, I'm</span>
          <h1 className="text-5xl font-bold mt-2">Rajnish Kumar</h1>
          <p className="mt-4 text-lg text-gray-400">
            Developer by passion, problem-solver by nature. 🚀
          </p>
        </div>
      </div>

      {/* Role & Current Position */}
      <div className="mt-10 text-center md:text-left relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          I'm a <span className="text-[#915EFF]">Software Developer</span>.
        </h2>
        <span className="block mt-2 text-gray-300 text-lg">
          Currently working at <span className="font-medium">Daya Electricals</span>.
        </span>
      </div>

      {/* Quote / Motto */}
      <div className="mt-10 text-center max-w-2xl relative z-10">
        <p className="text-gray-300 text-lg text-left font-semibold italic">
          "A software Developer, functioning in the Industry for 1+ years now.
          Striving to turn ideas into reality through code and creativity.
          Always eager to learn, adapt, and embrace challenges that push the
          limits of innovation."
        </p>
      </div>
    </div>
  );
}

export default Hero;
