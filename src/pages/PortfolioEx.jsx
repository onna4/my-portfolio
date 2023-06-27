import React from 'react'
import portfolio from '../assets/img/project2.png'

export default function PortfolioExample() {
  return (
    <>
      <section class="project-cs-hero">
        <div class="project-cs-hero__content">
          <h1 class="heading-primary">Portfolio Example</h1>
          <div class="project-cs-hero__info">
            <p class="text-primary">
              A website built as an example of a portfolio.
              Built with React and styled with Chakra UI and form is handled with Formik and Yup.
            </p>
          </div>
          <div class="project-cs-hero__cta">
            <a href="https://onna4.github.io/portfolio-example/" class="btn btn--bg" target="_blank">Live Link</a>
          </div>
        </div>
      </section>
      <section class="project-details">
        <div class="main-container">
          <div class="project-details__content">
            <div class="project-details__showcase-img-cont">
              <img
                src={portfolio}
                alt="Project Image"
                class="project-details__showcase-img"
              />
            </div>
            <div class="project-details__content-main">
              <div class="project-details__desc">
                <h3 class="project-details__content-title">Portfolio Example</h3>
                <p class="project-details__desc-para">
                  A website built as an example of a portfolio. 
                  Built with React and styled with Chakra UI and form is handled with Formik and Yup.
                </p>
              </div>
              <div class="project-details__tools-used">
                <h3 class="project-details__content-title">Tools Used</h3>
                <div class="skills">
                  <div class="skills__skill">React</div>
                  <div class="skills__skill">Chakra UI</div>
                  <div class="skills__skill">Formik</div>
                  <div class="skills__skill">Yup</div>
                </div>
              </div>
              <div class="project-details__links">
                <h3 class="project-details__content-title">See Live</h3>
                <a
                  href="https://onna4.github.io/portfolio-example/"
                  class="btn btn--med btn--theme project-details__links-btn"
                  target="_blank">Live Link</a>
                <a
                  href="https://github.com/onna4/portfolio-example"
                  class="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank">Code Link</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
