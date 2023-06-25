import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shortly from './pages/Shortly'
import Dashboard from './pages/Dashboard'
import PortfolioEx from './pages/PortfolioEx'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortly" element={<Shortly />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portfolio" element={<PortfolioEx />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
