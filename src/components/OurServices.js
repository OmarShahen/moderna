import React from 'react'
import './our-services.css'
import pythonImage from '../python.svg'
import nodeImage from '../node.js.svg'
import flutterImage from '../flutter.png'
import javaImage from '../java.png'
import swiftImage from '../swift.svg'
import figmaImage from '../figma.svg'
import adobeImage from '../adobe-suite.png'

const OurServices = () => {

    return (
        <div className="our-services">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>
                            SERVICES
                        </h1>
                    </div>
                </div>
                <div className="row service">
                    <div className="col-sm-12">
                        <h3>
                            WEB DEVELOPMENT
                        </h3>
                        <div className="col-sm-12 field-tech-icons">
                            <p>
                            <img src={nodeImage} alt="node.js icon" />
                            Node.js
                            </p>
                            <p>
                            <img src={pythonImage} alt="python icon" />
                                python
                            </p>
                        </div>
                        <div className="row services-description">
                            <div className="col-sm-12 col-md-10">
                            <p>
                            Moderna helps it’s clients to build their online professional identities for their brands, using high performing technologies to produce custom web development for businesses to provide flexible, reliable, and engaging solutions for their users. It all starts with our team of UI/UX designers and developers who help define requirements, hence our talented team of developers who have excelled in Node.js, python and React, implement the ideas.                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row service">
                    <div className="col-sm-12">
                        <h3>
                            CROSS PLATFORM
                        </h3>
                        <div className="col-sm-12 field-tech-icons">
                            <p>
                            <img src={flutterImage} alt="flutter icon" />
                            Flutter
                            </p>
                        </div>
                        <div className="row services-description">
                            <div className="col-sm-12 col-md-10">
                            <p>
                            Get the most out of your application by developing a cross-platform app! Cross-platform development is the best approach to cut the Project cost of developing a mobile application. It assists the businesses to diminish upgraded charges time-to-market and obtain more users and followers without scarifying the quality.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row service">
                    <div className="col-sm-12">
                        <h3>
                            ANDROID APP DEVELOPMENT
                        </h3>
                        <div className="col-sm-12 field-tech-icons">
                            <p>
                            <img src={javaImage} alt="flutter icon" />
                            Java
                            </p>
                        </div>
                        <div className="row services-description">
                            <div className="col-sm-12 col-md-10">
                                <p>
                                    We have extensive experience in developing android apps with high performance, whether it is enterprise apps, innovative consumer-focused apps, or service apps. we developed our unique procedures to guarantee to deliver a world-class mobile application.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row service">
                    <div className="col-sm-12">
                        <h3>
                            IOS APP DEVELOPMENT
                        </h3>
                        <div className="col-sm-12 field-tech-icons">
                            <p>
                                <img src={swiftImage} alt="flutter icon" />
                                Swift
                            </p>
                        </div>
                        <div className="row services-description">
                            <div className="col-sm-12 col-md-10">
                                <p>
                                    Our IOS developers are skilled in Swift to suit your app coding needs. We will code your ideas and turn them into reality with superior quality, on-time delivery dates, and a transparent development plan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row service">
                    <div className="col-sm-12">
                        <h3>
                            UI/UX DESIGN
                        </h3>
                        <div className="col-sm-12 field-tech-icons">
                            <p>
                            <img src={figmaImage} alt="figma icon" className="figma-icon"/>
                                Figma
                            </p>
                            <p>
                                <img src={adobeImage} alt="flutter icon" />
                                Adobe
                            </p>
                        </div>
                        <div className="row services-description">
                            <div className="col-sm-12 col-md-10">
                                <p>
                                No matter what your needs are, our passionate designers are ready to design all types of mobile apps and websites in different categories using the latest programs; Figma, Zeplin, and Xd and taking into consideration the user experience (UI/UX).<br /><br />

                                Because design is all about the touch points that a user encounters to navigate from A to B; We care a lot about these fine details to provide your customers with an engaging experience. As a result, this normally leaves an impressive impact on the overall UX of the product, and you can’t have one without the other.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices