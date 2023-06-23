import React from 'react'
import linkedinIco from '../assets/img/linkedin-ico.png'
import githubIco from '../assets/img/github-ico.png'
import codepenIco from '../assets/img/codepen-ico.png'

function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/omnia-abdelwahab-170306249/">
                <img
                  className="main-footer__icon"
                  src={linkedinIco}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/onna4">
                <img
                  className="main-footer__icon"
                  src={githubIco}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://codepen.io/omniahefz">
                <img
                  className="main-footer__icon"
                  src={codepenIco}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Omnia Abdelwahab</h4>
            <p className="main-footer__short-desc">
              A passionate frontend developer based in Istanbul, Turkey.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer