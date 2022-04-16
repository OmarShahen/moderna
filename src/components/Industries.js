import React from 'react'
import ecommerceImage from '../ecommerce.svg'
import healthcareImage from '../medical.svg'
import cmsImage from '../CMS.svg'
import educationImage from '../e-learning.svg'

const Industries = () => {
    return (
        <div className="industries">
            <div className="container text-center">
                <h3>INDUSTRIES WE WORK ON</h3>
                    <div className="line"></div>
                <div className="row">
                    <div className="col-sm-12 col-md-3 cms">
                        <img src={cmsImage} alt="cms image" />
                        <p>CRS</p>
                    </div>
                    <div className="col-sm-12 col-md-3 ecommerce">
                        <img src={ecommerceImage} alt="ecommerce image" />
                        <p>E-commerce</p>
                    </div>
                    <div className="col-sm-12 col-md-3 healthcare">
                        <img src={healthcareImage} alt="healthcare image" />
                        <p>Healthcare</p>
                    </div>
                    <div className="col-sm-12 col-md-3 education">
                        <img  src={educationImage} alt="education image" />
                        <p>Education</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Industries