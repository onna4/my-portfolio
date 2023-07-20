import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectItem from './pages/ProjectItem'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:path' element={<ProjectItem />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
