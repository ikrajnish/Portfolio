import React from 'react'
import { Icon } from '@iconify/react'

export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      role: 'Web Developer ',
      company: 'CreativePlus',
      period: 'Jan 2025 - Mar 2025',
      bullets: [
        'Built REST APIs with Node.js and Express',
        'Integrated third-party services and improved response time by 20%',
        'Wrote unit tests and improved CI pipeline'
      ]
    },
    {
      id: 2,
      role: 'Fullstack Developer (Freelance)',
      company: 'Various Clients',
      period: 'Jul 2024 - Jan 2025',
      bullets: [
        'Delivered multiple React + Node applications',
        'Implemented accessibility and responsive-first designs',
        'Deployed apps on AWS and configured automated deployments'
      ]
    }
  ]

  return (
    <section id="experience" className="py-16 bg-transparent bg-gradient-to-r from-black to-[#130428]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Work Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <article key={exp.id} className="bg-white/5 backdrop-blur rounded-lg p-6 md:p-8 hover:translate-y-0.5 transform transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-sm text-white/80">{exp.company}</p>
                </div>
                <time className="text-sm text-white/70">{exp.period}</time>
              </div>

              <ul className="mt-4 list-disc list-inside text-white/80 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-sm">{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex gap-3">
                <a href="#" className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-md bg-[#915EFF]/80 hover:bg-[#915EFF] transition">
                  <Icon icon="mdi:briefcase" /> Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
