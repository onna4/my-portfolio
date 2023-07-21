import React, {useRef, useState} from 'react'
import profile from '../assets/img/img.png'
import menuIcon from '../assets/svg/ham-menu.svg'
import closeIcon from '../assets/svg/ham-menu-close.svg'

export default function Header() {
  const smallMenuRef = useRef(null)
  const [showButton, setShowButton] = useState(true)

  const showMenu = () => {
    if (smallMenuRef.current.classList.contains('invisible')) {
      smallMenuRef.current.classList.remove('invisible')
      setShowButton(false)
    }
    else {
      smallMenuRef.current.classList.add('invisible')
      setShowButton(true)
    }
  }

  const hideMenu = () => {
    smallMenuRef.current.classList.add('invisible')
    setShowButton(true)
  }

  const navLinks = [
    { href: "/", linkName: "Home" },
    { href: "/#projects", linkName: "Projects" },
    { href: "/#about", linkName: "About" },
    { href: "/#contact", linkName: "Contact" }]

  const mainNav = navLinks.map((link, index) =>
    <li className="header__link-wrapper" key={index} >
      <a href={link.href}
        className="inline-block text-gray-800 hover:text-violet-500 text-2xl md:text-[1.6rem] py-12 px-7 md:px-12 md:py-9 uppercase font-bold tracking-wider transition-colors">
        {link.linkName}
      </a>
    </li>
  )

  const mobNav = navLinks.map((link, index) => 
    <li className="header__sm-menu-link" key={index} >
      <a onClick={hideMenu} href={link.href} className={`block no-underline text-right font-bold uppercase text-[1.6rem] hover:text-violet-500 transition-colors text-gray-800 border-b border-solid border-gray-200 ${index === 0? `border-t`: ""} px-12 py-10 tracking-[2px]`} > {link.linkName} </a>
    </li>
  )

  return (
    <header className="fixed w-full z-10 bg-white shadow-lg">
      <div className="flex items-center justify-between px-12 py-4 lg:px-20 ">
        <a className="flex items-center cursor-pointer text-gray-800 hover:text-violet-500 transition-colors" href="/" >
          <div className="w-[4.5rem] h-[4.5rem] mr-5 md:w-20 md:h-20 md:mr-6 bg-gradient-to-r from-red-variant to-violet-variant rounded-full overflow-hidden">
            <img
              src={profile}
              alt="Logo Image"
              className="w-full h-full object-cover object-center block"
            />
          </div>
          <span className="text-3xl uppercase font-bold tracking-wider">Omnia Abdelwahab</span>
        </a>
        <ul className="hidden md:flex">
          {mainNav}
        </ul>
        <div className="block md:hidden py-4">
          <button onClick={showMenu} className="grid place-items-center" >
            <img
              src={showButton ? menuIcon : closeIcon}
              alt="hamburger menu icon"
              className="w-full"
            />
          </button>
        </div>
      </div>
      <div ref={smallMenuRef} className="absolute w-full top-full invisible shadow-md transition-all bg-white">
        <ul>
          {mobNav}
        </ul>
      </div>
    </header>
  )
}
