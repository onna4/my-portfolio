import React from 'react'

export default function About() {

  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Figma", "Tailwind CSS"]
  const styledSkill = skills.map((skill, index) => 
    <div key={index}
         className="font-semibold rounded-md text-2xl mr-6 mb-6 py-4 px-8 text-gray-600 bg-neutral-200">
      {skill}
    </div>
    )

  return (
    <section id="about" className="bg-gray-50 py-32 lg:py-48">
      <div className="m-auto w-11/12 max-w-[120rem]">
        <h2 className="mb-32 lg:mb-36">
          <span className="block uppercase relative text-center text-[4rem] tracking-wide mb-14 font-bold">About Me</span>
          <span className="block text-center m-auto text-gray-700 text-3xl md:text-[2rem] font-medium max-w-7xl leading-relaxed">
            <p>I'm a frontend developer based out of Istanbul, Turkey. 
              I love building apps that solve real-world problems, and that are delightful to use. 
              My specialities include TypeScript, React JS, Tailwind CSS, and Styled Components.
            </p>
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-32 lg:grid-cols-2 lg:gap-40 ">
          <div>
            <h3 className="text-[2.4rem] xl:text-[2.8rem] mb-12 font-bold">Get to know me!</h3>
            <div>
              <p className="text-3xl mx-auto text-gray-700 max-w-[60rem] leading-relaxed mb-16">
                My background is in pharmacy and healthcare. I have a bachelors degree in pharmacy from Suez canal university. When I'm building websites with coding, I feel like this is my passion.
              </p>
            </div>
            <a href="./#contact" className="uppercase inline-block font-bold rounded-md tracking-[2px] shadow-lg transition-transform
              hover:translate-y-[-3px] text-white text-[1.6rem] py-6 px-20 bg-gradient-to-r from-red-variant to-violet-variant">Contact</a>
          </div>
          <div>
            <h3 className="text-[2.4rem] xl:text-[2.8rem] mb-12 font-bold">My Skills</h3>
            <div className="flex flex-wrap justify-center">
              {styledSkill}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
