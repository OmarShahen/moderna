import React from 'react'
import techImage from '../projects-images/tech-laptop.PNG'
import furnitureImage from '../projects-images/furniture-ipad.PNG'
import carspaImage from '../projects-images/car-spa.PNG'
import parkingImage from '../projects-images/parking-app.jpeg'
import codingImage from '../coding.png'


const Portfolio = () => {

    return (
        <div className="portfolio">
            <div className="conatiner text-center">
                <h3>
                    OUR WORK
                    <div className="line"></div>
                </h3>
                <div className="row project tech">
                    <div className="col-sm-12 col-md-6">
                        <a href="https://omarshahen.github.io/shop-ecommerce-tech/shop%20index"><img src={techImage} alt="tech shop site"/></a>
                    </div>
                    <div className="col-sm-12 col-md-6 project-description">
                        <h4>
                            THERANKME
                        </h4>
                        <p>
                            E-commerce For Tech Items
                        </p>
                        <h5>
                        Technologies
                        </h5>
                        <p>
                            React
                        </p>
                        <p>
                            Python
                        </p>
                    </div>
                </div>
                <div className="row project">
                    <div className="col-sm-12 col-md-6 project-description large-screen">
                        <h4>
                            FURNI
                        </h4>
                        <p>
                            E-commerce For Furniture
                        </p>
                        <h5>
                        Technologies
                        </h5>
                        <p>
                            React
                        </p>
                        <p>
                            Node.js
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <a href="https://omarshahen.github.io/shop-ecommerce/Website%20Template/">
                            <img src={furnitureImage} alt="furniture shop site" className="ipad-image"/>
                        </a>
                    </div>
                    <div className="col-sm-12 small-screen project-description">
                        <h4>
                        FURNI
                        </h4>
                        <p>
                            E-commerce For Furniture
                        </p>
                        <h5>
                        Technologies
                        </h5>
                        <p>
                            React
                        </p>
                        <p>
                            Node.js
                        </p>
                    </div>
                </div>
                <div className="row project">
                    <div className="col-sm-12 col-md-6">
                        <img src={carspaImage} alt="car washing app" className="car-spa-image"/>
                    </div>
                    <div className="col-sm-12 col-md-6 project-description">
                        <h4>
                            CAR-SPA
                        </h4>
                        <p>
                            Car Wash Booking 
                        </p>
                        <h5>
                            Technologies
                        </h5>
                        <p>
                            Flutter
                        </p>
                        <p>
                            Node.js
                        </p>
                    </div>
                </div>
                <div className="row project">
                    <div className="col-sm-12 col-md-6 large-screen project-description">
                        <h4>
                        ARKNE
                        </h4>
                        <p>
                            Car Parking App
                        </p>
                        <h5>
                        Technologies
                        </h5>
                        <p>
                            Flutter
                        </p>
                        <p>
                            Firebase
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img src={parkingImage} alt="furniture shop site" className="parking-image"/>
                    </div>
                    <div className="col-sm-12 col-md-6 small-screen project-description">
                        <h4>
                        ARKNE
                        </h4>
                        <p>
                            Car Parking App
                        </p>
                        <h5>
                        Technologies
                        </h5>
                        <p>
                            Flutter
                        </p>
                        <p>
                            Firebase
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio