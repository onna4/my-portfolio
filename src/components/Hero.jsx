import React from 'react'
import { iconArr } from './Footer'

export default function Hero() {

  const icons = iconArr.map((icon, index) =>
    <div key={index} className="w-20">
      <a href={icon.link} target="_blank" className={`border-b-2 ${index === iconArr.length - 1 ? "!border-b-0": ''} border-solid border-white w-full block hover:bg-violet-400 duration-300`} >
        <img
          src={icon.src}
          alt="icon"
          className="w-full p-4"
        />
      </a>
    </div>
  )

  return (
    <section className="relative text-white h-screen min-h-full max-h-[120rem] md:min-h-[80rem] bg-gradient-to-r from-red-variant to-violet-variant ">
      <div className="static translate-x-0 translate-y-0 md:absolute top-1/2 left-1/2 md:translate-x-[-50%] md:translate-y-[-50%] max-w-[90rem] w-11/12 pb-52 pt-72 m-auto ">
        <h1 className="text-7xl md:text-8xl uppercase text-center tracking-[3px] font-bold">Hey, My name is Omnia Abdelwahab</h1>
        <div className="mt-12 mx-auto max-w-7xl">
          <p className="text-[2rem] md:text-4xl text-center text-white w-full !leading-relaxed">
            I am a passionate frontend developer based in Istanbul, Turkey. My specialities are <strong>React JS</strong> and <strong>Tailwind CSS</strong>, and I love building apps that are delightful to use.
          </p>
        </div>
        <div className="mt-20 text-center">
          <a href="./#projects" className="uppercase inline-block font-bold bg-white rounded-md tracking-[2px] text-gray-800 shadow-lg transition-transform
            hover:translate-y-[-3px] text-[2rem] py-6 px-32">See my projects</a>
        </div>
      </div>
      <div className="hidden lg:block absolute top-2/4 border-2 border-solid border-[#eee] -translate-y-1/2">
        {icons}
      </div>
      <div className="absolute hidden md:block bottom-[3%] left-2/4 -translate-x-2/4">
        <div className="mouse relative overflow-hidden w-10 h-16 border-2 border-solid border-white rounded-[60px] 
        before:w-2 before:h-2 before:absolute before:left-2/4 before:top-3.5 before:opacity-100 before:bg-white before:rounded-full	before:-translate-x-2/4"></div>
      </div>
    </section>
  )
}