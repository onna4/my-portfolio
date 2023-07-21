import React from 'react'
import projectsData from'./projectsData.js'
import { Link } from 'react-router-dom'
import { imgfiles } from '../pages/ProjectItem'

export default function Projects() {

  const projectItems = projectsData.map( (project, index) =>
  (
    <div key={index} className="grid gap-8 mb-32 md:grid-cols-[1.5fr_1fr] md:gap-20 md:mb-44 md:text-center [&>*:last-child]:mb-20">
      <div className="overflow-hidden">
        {imgfiles.map((img, index) =>
          img.name === project.path ?
            <img
              key={index}
              src={img.link}
              alt="Software Screenshot"
              className="w-full block object-cover"
            />
            : "")}
      </div>
      <div className= "flex justify-center flex-col items-center md:items-start py-8">
        <h3 className="xl:font-bold text-4xl md:text-5xl mb-8">{project.title}</h3>
        <p className="text-3xl text-gray-700 max-w-4xl leading-relaxed mb-12">
          {project.description}
        </p>
        <Link
          to={project.link}
          className="uppercase inline-block font-bold rounded-md tracking-wider shadow-lg transition-transform
          hover:translate-y-[-3px] text-[1.6rem] py-6 px-20 text-white 
          bg-gradient-to-r from-red-variant to-violet-variant">Learn more</Link>
      </div>
    </div>
  ))

  return (
    <section id="projects" className="py-32 lg:py-48">
      <div className="m-auto w-11/12 max-w-[120rem]">
        <h2 className="mb-32 lg:mb-44">
          <span className="block uppercase relative text-center text-[4rem] tracking-wide mb-14 font-bold">Projects</span>
          <span className="block text-center m-auto text-gray-700 text-3xl md:text-[2rem] font-medium max-w-7xl leading-relaxed">
            All my projects include links to the code and live version. Click the button to learn more about each one.
          </span>
        </h2>
        {projectItems}
      </div>
    </section>
  )
}
