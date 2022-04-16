import React from 'react'
import './about-us.css'

const About = () => {

    return (
        <div className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>
                            ABOUT <span>US</span>
                        </h1>
                        <h3>
                            WHO WE ARE
                        </h3>
                            <ul>
                                <li>
                                    <p>
                                    <span>Moderna</span> is a mobile app and web development company,
                                     headquartered in Alexandria, Egypt. We develope an extensive,
                                    rich and interactive experience in mobile app development and enterprise web apps.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    We specialize in web development, where we develope highly scalable apps with various languages and frameworks.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    We specialize in mobile app development,
                                     we support various mobile development SDKs and we have developed many mobile apps.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                    We adopt an Agile development approach to make
                                    sure we listen to our clients feedback at each project
                                    phase and to minimize the error percentage.
                                    We have a dedicated team assigned to provide an
                                    excellent technical support and satisfaction to our valuable clients.
                                    </p>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About