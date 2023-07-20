import React from 'react'
import projectsData from '../components/projectsData'
import { useParams } from 'react-router-dom'
import shortlylink from '../assets/img/project1.jpg'
import dashboardlink from '../assets/img/dashboard3.png'
import portfoliolink from '../assets/img/project2.png'

export const imgfiles = [{link: shortlylink, name: "shortly"} , {link: dashboardlink, name:'dashboard'}, {link: portfoliolink, name: 'portfolio'}]

export default function projectItem() {
  const params = useParams()

  const projectItem = projectsData.map( (project, index) => ( project.path === params.path ?
    <>
      <section key={index} className="relative text-white min-h-full bg-gradient-to-r from-red-variant to-violet-variant" >
        <div className="static m-auto w-11/12 max-w-[90rem] pb-52 pt-[19rem] md:pt-[25rem] md:pb-64 translate-x-0 translate-y-0">
          <h1 className="text-7xl md:text-8xl uppercase text-center tracking-[3px] font-bold">{project.title}</h1>
          <div className="mx-auto mt-12 max-w-7xl ">
            <p className="text-[2rem] md:text-4xl text-center text-white w-full !leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="mt-20 text-center">
            <a href={project.liveLink} className="uppercase inline-block font-bold rounded-md bg-white tracking-[2px] shadow-lg transition-transform
              hover:translate-y-[-3px] text-[2rem] py-6 px-32 " target="_blank">Live Link</a>
          </div>
        </div>
      </section >
      <section className="project-details">
        <div className="main-container">
          <div className="max-w-[90rem] m-auto py-32">
            <div className="w-full mb-24">
              {imgfiles.map( (img, index) => 
              img.name === project.path ?
              <img 
                key={index}
                src={img.link}
                alt="Project Image"
                className="w-full"
              /> : "")}
            </div>
            <div className="w-full m-auto max-w-[70rem]">
              <div className="mb-28">
                <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold mb-12">{project.title}</h3>
                <p className="text-3xl	leading-relaxed text-gray-500 mb-8">
                  {project.description}
                </p>
              </div>
              <div className="mb-28">
                <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold mb-12">Tools Used</h3>
                <div className="flex flex-wrap justify-center">
                  {project.tools.map(tool => (
                  <div className="font-semibold rounded-md text-2xl mr-6 mb-6 py-4 px-8 text-gray-500 bg-neutral-200">{tool}</div> ))}
                </div>
              </div>
              <div className="m-0">
                <h3 className="text-[2.4rem] md:text-[2.8rem] font-bold mb-12">See Live</h3>
                <a
                  href={project.liveLink}
                  className="uppercase font-bold rounded-md tracking-[2px] shadow-lg transition-transform hover:translate-y-[-3px]
                  text-[1.6rem] py-6 px-20 text-white mr-0 md:mr-8 mb-8 text-center w-9/12 bg-gradient-to-r from-red-variant to-violet-variant"
                  target="_blank"
                >Live Link</a>
                <a
                  href={project.sourceCode}
                  className="uppercase font-bold bg-white rounded-md tracking-[2px] shadow-lg transition-transform hover:translate-y-[-3px] text-violet-600 
                  text-[1.6rem] py-6 px-20 border-2 border-solid border-violet-300 mr-0 text-center w-9/12"
                  target="_blank"
                >Code Link</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    : ""
  ))

  return (
    <>
      {projectItem}
    </>
  )
}
