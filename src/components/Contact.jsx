import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 lg:py-48 bg-gradient-to-r from-red-variant to-violet-variant">
      <div className="m-auto w-11/12 max-w-[120rem]">
        <h2 className="mb-32 lg:mb-36">
          <span className="text-white block uppercase relative text-center text-[4rem] tracking-wide mb-14 font-bold
            after:absolute after:h-2.5 after:w-12 after:left-2/4 after:rounded-md after:bg-white after:-translate-x-2/4 after:top-[calc(100%+1.2rem)] md:after:top-[calc(100%+1.5rem)]">
          Contact</span>
          <span className="block text-center m-auto text-gray-300 text-3xl md:text-[2rem] font-medium max-w-7xl leading-relaxed">
            Please reach out if you have any questions! I'm happy to brainstorm projects and ideas. Send me an email at omnia.hefzy@gmail.com
          </span>
        </h2>
      </div>
    </section>
  )
}
