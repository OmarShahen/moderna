import React, {useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Core from '../components/Core'
import Services from '../components/Services'
import Industries from '../components/Industries'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Portfolio from '../components/Portfolio'
import ReactLoading from 'react-loading'

const HomePage = () => {

    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)
        setLoading(false)
    }, [])

    return (
        <div className="container-fluid">

            <Navbar />
            <Core />
            <Services />
            <Industries />
            <Portfolio />
            <ContactUs />
            <Footer />
        </div>
    )

}

export default HomePage