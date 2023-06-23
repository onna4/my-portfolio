import React from 'react'
import linkedinIco from '../assets/img/linkedin-ico.png'
import githubIco from '../assets/img/github-ico.png'
import codepenIco from '../assets/img/codepen-ico.png'

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">Hey, My name is Omnia Abdelwahab</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            I am a passionate frontend developer based in Istanbul, Turkey. My specialities are <strong>React JS</strong> and <strong>Tailwind CSS</strong>, and I love building apps that are delightful to use.
          </p>
        </div>
        <div className="home-hero__cta">
          <a href="./#projects" className="btn btn--bg">See my projects</a>
        </div>
      </div>
      <div className="home-hero__socials">
        <div className="home-hero__social">
          <a href="https://www.linkedin.com/in/omnia-abdelwahab-170306249/" target="_blank" className="home-hero__social-icon-link">
            <img
              src={linkedinIco}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a href="https://github.com/onna4" target="_blank" className="home-hero__social-icon-link">
            <img
              src={githubIco}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
        <div className="home-hero__social">
          <a
            href="https://codepen.io/omniahefz" target="_blank"
            className="home-hero__social-icon-link home-hero__social-icon-link--bd-none">
            <img
              src={codepenIco}
              alt="icon"
              className="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  )
}