import React from 'react'
import webImage from '../web-dev.svg'
import mobileImage from '../mobile-dev.svg'
import uiuxImage from '../UI-UX-design.svg'

const Services = () => {

    return (
        <div className="services">
            <div className="container text-center">
                <h3>Our Services</h3>
                <div className="line"></div>
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="services-card">
                            <img src={webImage} alt="web dev"/>
                            <h4>Web Development</h4>
                            <p>
                            Real-time web applications that grow with your business, with a rock-solid foundation that allow it to scale using the latest technologies
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="services-card">
                            <img src={mobileImage} alt="web dev"/>
                            <h4>Mobile App Development</h4>
                            <p>
                            Developing a usable app goes beyond it just working. It has to be fast, responsive, and eye-catching with pixel-perfect designs for both Android and iOS                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="services-card">
                            <img src={uiuxImage} alt="web dev"/>
                            <h4>UI/UX Design</h4>
                            <p>
                            Prototyping, UI/UX design for web & mobile products Focusing on delivering an exceptional customer experience                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services