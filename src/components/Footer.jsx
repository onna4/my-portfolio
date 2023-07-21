import React from 'react'
import linkedinIco from '../assets/img/linkedin-ico.png'
import githubIco from '../assets/img/github-ico.png'
import codepenIco from '../assets/img/codepen-ico.png'

export const iconArr = [{link: 'https://www.linkedin.com/in/omnia-abdelwahab-170306249/' , src: linkedinIco}, 
                  {link: "https://github.com/onna4" , src: githubIco}, 
                  {link: "https://codepen.io/omniahefz" , src: codepenIco}]
const icons = iconArr.map((icon, index) => 
              <a target="_blank" rel="noreferrer" href={icon.link} key={index} >
                <img
                  className="mr-4 w-10"
                  src={icon.src}
                  alt="icon"
                />
              </a>
            )

function Footer() {
  return (
    <footer className="bg-[black] text-[white]">
      <div className="m-auto w-11/12	max-w-[120rem]">
        <div className="md:flex justify-between block text-center py-24 lg:py-32">
          <div className="order-2 mb-20">
            <h2 className="uppercase text-4xl tracking-wide	main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="flex justify-center mt-8">
              {icons}
            </div>
          </div>
          <div className="md:w-5/12 max-w-3xl w-full">
            <h4 className="uppercase text-4xl tracking-wide	text-lt">Omnia Abdelwahab</h4>
            <p className="mt-8 text-2xl leading-relaxed text-[#eee]">
              A passionate frontend developer based in Istanbul, Turkey.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer