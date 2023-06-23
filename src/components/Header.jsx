import React, {useRef, useState} from 'react'
import profile from '../assets/img/profile-1.jpeg'
import menuIcon from '../assets/svg/ham-menu.svg'
import closeIcon from '../assets/svg/ham-menu-close.svg'

export default function Header() {
  const smallMenuRef = useRef(null)
  const [showButton, setShowButton] = useState(false)

    const showMenu = () => {
      if (smallMenuRef.current.classList.contains('header__sm-menu--active')) {
        smallMenuRef.current.classList.remove('header__sm-menu--active')
        setShowButton(true)
      }
      else {
        smallMenuRef.current.classList.add('header__sm-menu--active')
        setShowButton(false)
      }
    }

    const hideMenu = () => {
      smallMenuRef.current.classList.remove('header__sm-menu--active')
      setShowButton(true)
    }

  return (
    <header className="header">
      <div className="header__content">
        <a className="header__logo-container" href="./index.html" >
          <div className="header__logo-img-cont">
            <img
              src={profile}
              alt="Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Omnia Abdelwahab</span>
        </a>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="#" className="header__link"> Home </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#projects" className="header__link">
                Projects
              </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#about" className="header__link">About </a>
            </li>
            <li className="header__link-wrapper">
              <a href="#contact" className="header__link"> Contact </a>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont">
            <button onClick={showMenu} >
              <img
                src={showButton? menuIcon: closeIcon}
                alt="hamburger menu icon"
                className="header__main-ham-menu"
              />
            </button>
          </div>
        </div>
      </div>
      <div ref={smallMenuRef} className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a onClick={hideMenu} href="./index.html"> Home </a>
            </li>

            <li className="header__sm-menu-link">
              <a onClick={hideMenu} href="./index.html#about"> About </a>
            </li>

            <li className="header__sm-menu-link">
              <a  onClick={hideMenu} href="./index.html#projects"> Projects </a>
            </li>

            <li className="header__sm-menu-link">
              <a onClick={hideMenu} href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
