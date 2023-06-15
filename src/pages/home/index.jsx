import React from 'react'
import Navbar from '../../components/navbar'
import Hero from "../hero/"
import Skills from "../../components/skills"
import Projects from "../../components/projects"
import Contact from "../../components/contact"

const Home = () => {
  return (
    <div className="bg-[#dcedc82e] xl:px-[5vw] 2xl:px-[10vw] ">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home