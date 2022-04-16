import React from 'react'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Projects from '../components/projects'


const PortfolioPage = () => {

    return (
        <div className="container-fluid">
            <Navbar />
            <Projects />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default PortfolioPage