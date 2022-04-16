import React from 'react'
import Navbar from '../components/Navbar'
import ContactUsForm from '../components/ContactUsForm'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import '../components/contact-us-form.css'

const ContactUsPage = () => {

    return (
        <div className="container-fluid">
            <Navbar />
            <ContactUsForm />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default ContactUsPage