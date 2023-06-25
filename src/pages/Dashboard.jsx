import React from 'react'
import dash from '../assets/img/dashboard 3.png'

export default function PersonalDashboard() {
  return (
    <>
      <section class="project-cs-hero">
        <div class="project-cs-hero__content">
          <h1 class="heading-primary">Project 1</h1>
          <div class="project-cs-hero__info">
            <p class="text-primary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
              in numquam incidunt earum quaerat cum fuga, atque similique natus
              nobis sit.
            </p>
          </div>
          <div class="project-cs-hero__cta">
            <a href="#" class="btn btn--bg" target="_blank">Live Link</a>
          </div>
        </div>
      </section>
      <section class="project-details">
        <div class="main-container">
          <div class="project-details__content">
            <div class="project-details__showcase-img-cont">
              <img
                src={dash}
                alt="Project Image"
                class="project-details__showcase-img"
              />
            </div>
            <div class="project-details__content-main">
              <div class="project-details__desc">
                <h3 class="project-details__content-title">Personal Dashboard</h3>
                <p class="project-details__desc-para">
                    A Chrome Extension that gives you an overview over the current time,
                     how the weather is like and how Dogecoin is performing.
                    Interacts with multiple APIs using async JS.
                </p>
              </div>
              <div class="project-details__tools-used">
                <h3 class="project-details__content-title">Tools Used</h3>
                <div class="skills">
                  <div class="skills__skill">HTML</div>
                  <div class="skills__skill">CSS</div>
                  <div class="skills__skill">JavaScript</div>
                  <div class="skills__skill">API</div>
                </div>
              </div>
              <div class="project-details__links">
                <h3 class="project-details__content-title">See Live</h3>
                <a
                  href="#"
                  class="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                >Live Link</a>
                <a
                  href="https://github.com/onna4/personal-dashboard"
                  class="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                >Code Link</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
