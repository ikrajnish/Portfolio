import React from 'react'
import { Icon } from '@iconify/react'
import resume from '../assets/Rajnish__Resume.pdf';

function About() {
  const skills = [
    { name: "Frontend", descriptions: "React, Next.js, Tailwind CSS" },
    { name: "Backend", descriptions: "Node.js, Express, Postgres / MongoDB" },
    { name: "Cloud & DevOps", descriptions: "AWS, Docker, CI/CD" }
  ]

  return (
    <section id='About' className="bg-gradient-to-r from-black to-[#130428] text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-lg">

        {/* Left: Avatar / Intro */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#915EFF] to-[#5EEAD4] flex items-center justify-center text-4xl font-bold text-white shadow-xl ring-4 ring-white/5">
            RK
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Rajnish Kumar</h1>
            <p className="text-sm text-white/80">Fullstack Developer</p>
          </div>

          <div className="flex gap-3 mt-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#915EFF] hover:bg-[#7a47e8] px-4 py-2 rounded-md text-sm font-medium shadow-md transition">
              <Icon icon="mdi:email" className="text-lg" /> Contact
            </a>
            <a href={resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-md text-sm hover:bg-white/5 transition">
              <Icon icon="mdi:download" className="text-lg" /> Resume
            </a>
          </div>
        </div>

        {/* Right: Text, stats, and skills */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-white/85 leading-relaxed">
            Hi — I'm Rajnish, a fullstack developer who builds performant, accessible web applications. I enjoy turning complex problems into elegant, user-friendly products. Currently focused on React, Node.js, and cloud-native deployments.
          </p>

          <div className="flex gap-8 mt-6">
            <div className="flex flex-col border-l-4 border-[#915EFF] pl-4">
              <span className="text-3xl font-bold">1+</span>
              <span className="text-sm text-white/70">Years Experience</span>
            </div>
            <div className="flex flex-col border-l-4 border-[#915EFF] pl-4">
              <span className="text-3xl font-bold">10+</span>
              <span className="text-sm text-white/70">Projects</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span key={s.name} className="px-3 py-1 rounded-full bg-white/6 text-sm text-white/90 hover:bg-white/10 transition">
                  <strong className="mr-2 text-sm">{s.name}:</strong>
                  <span className="text-xs text-white/70">{s.descriptions}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
