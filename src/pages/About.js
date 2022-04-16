import React from 'react'
import Navbar from '../components/Navbar'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import About from '../components/About'

const AboutUSPage = () => {

    return (
        <div className="container-fluid">
            <Navbar />
            <About />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default AboutUSPage