import React from "react";
import { Icon } from "@iconify/react";

export default function Skills() {
  const skill = [
    { id: 2, name: "C++", icon: "logos:c-plusplus" },
    { id: 3, name: "JavaScript", icon: "logos:javascript" },
    { id: 4, name: "TypeScript", icon: "logos:typescript-icon" },
    { id: 6, name: "Python", icon: "logos:python" },
    { id: 5, name: "HTML5", icon: "logos:html-5" },
    { id: 7, name: "ReactJS", icon: "logos:react" },
    { id: 8, name: "NextJS", icon: "skill-icons:nextjs-light" },
    { id: 9, name: "NodeJS", icon: "logos:nodejs-icon" },
    { id: 10, name: "ExpressJS", icon: "simple-icons:express" },
    { id: 19, name: "CSS", icon: "catppuccin:css" },
    { id: 11, name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { id: 12, name: "Bootstrap", icon: "logos:bootstrap" },
    { id: 13, name: "MongoDB", icon: "skill-icons:mongodb" },
    { id: 14, name: "Postgres", icon: "logos:postgresql" },
    { id: 15, name: "Firebase", icon: "devicon:firebase" },
    { id: 16, name: "Git", icon: "devicon:git" },
    { id: 17, name: "AWS", icon: "skill-icons:aws-dark" },
    { id: 18, name: "Docker", icon: "logos:docker-icon" },
  ];
  return (
    <div className="bg-gradient-to-r from-black to-[#130428] text-white text-center py-16">
      <h1 className="text-4xl md:text-3xl mb-10">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
        {skill.map((sk) => (
          <div
            key={sk.id}
            className="bg-gray-700/30 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center transform transition-transform duration-200 ease-in-out hover:scale-105 shadow-md hover:shadow-lg hover:bg-gray-600/50 cursor-pointer"
          >
            <button className="flex flex-col items-center gap-2 text-lg font-medium">
              <Icon icon={sk.icon} className="text-4xl" /> {sk.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}