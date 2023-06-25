import React from 'react'
import shortly from '../assets/img/project1.jpg'

export default function Shortly() {
  return (
        <>
            <section class="project-cs-hero">
                <div class="project-cs-hero__content">
                    <h1 class="heading-primary">Shortly App</h1>
                    <div class="project-cs-hero__info">
                        <p class="text-primary">
                            Shortly is an app integrated with the shrtcode API to create shortened URLs and display them to the user 
                            with an option to copy or delete the shortened links. 
                            It's built with functional React components and using local storage to save user's shortened URL's.
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
                                src={shortly}
                                alt="Project Image"
                                class="project-details__showcase-img"
                            />
                        </div>
                      <div class="project-details__content-main">
                          <div class="project-details__desc">
                              <h3 class="project-details__content-title">Shortly App</h3>
                              <p class="project-details__desc-para">
                                  Shortly is an app integrated with the shrtcode API to create shortened URLs and display them to the user
                                  with an option to copy or delete the shortened links.
                                  It's built with functional React components and using local storage to save user's shortened URL's.
                              </p>
                            </div>
                            <div class="project-details__tools-used">
                                <h3 class="project-details__content-title">Tools Used</h3>
                                <div class="skills">
                                    <div class="skills__skill">React</div>
                                    <div class="skills__skill">CSS</div>
                                    <div class="skills__skill">API</div>
                                </div>
                            </div>
                            <div class="project-details__links">
                                <h3 class="project-details__content-title">See Live</h3>
                                <a
                                    href="https://shorty-url-shortening-api.vercel.app/"
                                    class="btn btn--med btn--theme project-details__links-btn"
                                    target="_blank">Live Link</a>
                                <a
                                    href="https://github.com/onna4/shorty-URL-shortening-API"
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
