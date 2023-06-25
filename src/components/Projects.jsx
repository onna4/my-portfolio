import React from 'react'
import shortly from '../assets/img/project1.jpg'
import portfolio from '../assets/img/project2.png'
import dash from '../assets/img/dashboard 3.png'
import { Link } from 'react-router-dom'

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
                src={shortly}
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
              <Link
                to="/shortly"
                className="btn btn--med btn--theme dynamicBgClr">Learn more</Link>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={dash}
                alt="Software Screenshot"
                className="projects__row-img"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Personal Dashboard</h3>
              <p className="projects__row-content-desc">
                A Chrome Extension that gives you an overview over the current time, how the weather is like and how Dogecoin is performing. Interacts with multiple APIs using async JS.
              </p>
              <Link
                to="/dashboard"
                className="btn btn--med btn--theme dynamicBgClr">Learn more</Link>
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={portfolio}
                alt="Software Screenshot"
                className="projects__row-img"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Portfolio Example</h3>
              <p className="projects__row-content-desc">
                A website built as an example of a portfolio. Built with React and styled with Chakra UI and form is handled with Formik and Yup.
              </p>
              <Link
                to="/portfolio"
                className="btn btn--med btn--theme dynamicBgClr">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
