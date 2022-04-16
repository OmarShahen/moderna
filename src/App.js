import React from 'react'
import HomePage from './pages/Home'
import AboutUSPage from './pages/About'
import ContactUsPage from './pages/ContactUs'
import PortfolioPage from './pages/Portfolio'
import ServicesPage from './pages/Services'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutUSPage />} />
          <Route exact path="/contact-us" element={<ContactUsPage />} />
          <Route exact path="/portfolio" element={<PortfolioPage />} />
          <Route exact path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App;
