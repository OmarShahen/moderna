import React from 'react'
import './projects.css'
import techImage from '../projects-images/tech-laptop.PNG'
import furnitureImage from '../projects-images/furniture-ipad.PNG'
import carspaImage from '../projects-images/car-spa.PNG'
import parkingImage from '../projects-images/parking-app.jpeg'
import chatImage from '../projects-images/chat-app.jpeg'
import expenseTrackImage from '../projects-images/expense-tracker.jpeg'

const Projects = () => {

    return (
        <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>
                        PORTFOLIO
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 app-card">
                            <div className="text-center">
                                <a href="https://omarshahen.github.io/shop-ecommerce-tech/shop%20index">
                                    <img src={techImage} className="tech-img" alt="tect-shop-image" />
                                </a>
                            </div>
                            <h3>THERANKME</h3>
                            <p>
                                THERANKME is an ecommerce for tech products where you can find
                                smartphones, earphones, TV's, power banks and camera's to buy. 
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6"></div>
                            <div className="col-sm-12 col-md-6 app-card">
                                <div className="text-center">
                                    <a href="https://omarshahen.github.io/shop-ecommerce/Website%20Template/">
                                        <img src={furnitureImage} className="furniture-img" alt="furniture-shop-image" />
                                    </a>
                                </div>
                                <h3>FURNI</h3>
                                <p>
                                    FURNI is an ecommerce for furnitures where you can find
                                    all your items in an elegant and easy way. 
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 app-card">
                                <div className="text-center">
                                    <img src={carspaImage} className="car-spa-img" alt="car-spa-image" />
                                </div>
                                <h3>CAR-SPA</h3>
                                <p>
                                    CAR-SPA is a car wash booking app where you can wash your
                                    car with a new tech that doesn't affect your car with low cost at
                                    your prefered time. 
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6"></div>
                            <div className="col-sm-12 col-md-6 app-card">
                                <div className="text-center">
                                    <img src={parkingImage} className="parking-app-img" alt="furniture-shop-image" />
                                </div>
                                <h3>GO PARK</h3>
                                <p>
                                    ARKNE is a car parking app where it helps you find nearby slots
                                    to park your car without any time wasting.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 app-card">
                                <div className="text-center">
                                    <img src={chatImage} className="chat-app-img" alt="furniture-shop-image" />
                                </div>
                                <h3>SPARK</h3>
                                <p>
                                    KLMNE is a chat app where you can text all your family members, friends
                                    and people you have their contact. 
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6"></div>
                            <div className="col-sm-12 col-md-6 app-card">
                                <div className="text-center">
                                    <img src={expenseTrackImage} className="expense-app-img" alt="furniture-shop-image" />
                                </div>
                                <h3>EXPENSE TRACKER</h3>
                                <p>
                                    EXPENSE TRACKER is app that tracks all your expenses and 
                                    enables budget limiting. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects