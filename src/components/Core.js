import React from 'react'
import image from '../side-home-image.webp'
import { motion } from 'framer-motion' 

const Core = () => {
    return (
        <div className="container">
            <div className="core row">
            <div className="col-sm-12 col-md-6 small-screen">
                <img src={image} alt="image" />
            </div>
                <div className="col-sm-12 col-md-7">
                    <p>
                        WE BUILD <span>SOFTWARES</span> <br/>
                        TO GROW <span>BUSINESSES</span><br />
                        TO GENERATE <span>PROFITS</span>
                    </p>

                    <button data-bs-toggle="modal" data-bs-target="#myModal">LET'S TALK</button>
                </div>
            <div className="col-sm-12 col-md-5 large-screen">
                <img src={image} alt="image of home" />
            </div>
        </div>
    </div>
    )
}

export default Core