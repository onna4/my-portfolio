import React from 'react'
import project1 from '../assets/img/project1.jpg'
import project2 from '../assets/img/dashboard.png'
import project3 from '../assets/img/dashboard 3.png'

export default function Projects() {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            All my projects include links to the code and live version. Click the button to learn more about each one.
          </span>
        </h2>

        <div className="projects__content">
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={project1}
                alt="Software Screenshot"
                className="projects__row-img"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Shortly App</h3>
              <p className="projects__row-content-desc">
                Shortly is an app integrated with the shrtcode API to create shortened URLs and display them to the user with an option to copy or delete the shortened links.
                It's built with functional React components and using local storage to save user's shortened URL's.
              </p>
              <a
                href="./project-1.html"
                className="btn btn--med btn--theme dynamicBgClr">Learn more</a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={project3}
                alt="Software Screenshot"
                className="projects__row-img"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Personal Dashboard</h3>
              <p className="projects__row-content-desc">
                A Chrome Extension that gives you an overview over the current time, how the weather is like and how Dogecoin is performing. Interacts with multiple APIs using async JS.
              </p>
              <a
                href="./project-2.html"
                className="btn btn--med btn--theme dynamicBgClr">Learn more</a>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={project2}
                alt="Software Screenshot"
                className="projects__row-img"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Password Generator</h3>
              <p className="projects__row-content-desc">
                An app that generates random passwords based on a few user inputs,
                e.g. length, types of characters, etc. Built with HTML, CSS, and vanilla JavaScript.
              </p>
              <a
                href="./project-3.html"
                className="btn btn--med btn--theme dynamicBgClr">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
