import React from 'react'
import Navbar from '../components/Navbar'
import OurServices from '../components/OurServices'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const  ServicesPage = () => {

    return (
        <div className="container-fluid">
            <Navbar />
            <OurServices />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default ServicesPage