import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import GithubContributions from '../components/GithubContributions'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <GithubContributions />
      <Contact />
      <Footer />
    </div>
    
  )
}

export default Home