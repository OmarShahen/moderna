import React, { Component } from 'react'
import logo from '../logo.png'
import { NavLink, Link } from 'react-router-dom'

class Navbar extends Component{

    state = {
        responsive: false
    }

    toResponsive = () => {
        if(this.state.responsive) {
            this.setState({
                responsive: false
            })
        } else {
            this.setState({
                responsive: true
            })
        }
    }
    
    hiddenMenu = () => {
        return (<div>
            <header className="container-fluid fixed-top">
                        <img src={logo} alt="moderna" className="logo" />
                        <p><strong>mode</strong>rna<br/> <span>GROW SMARTER</span>
                        </p>
                    <div>
                        <ul className="nav-bar-links">

                            <li><a href="/contact-us" className="contact-us-tab">Contact US</a></li>

                            <li><a href="/portfolio" className="portfolio-tab">Portfolio</a></li>

                            <li><a href="/services" className="services-tab">Services</a></li>

                            <li><a href="/about" className="about-tab">About</a></li>

                            <li><a href="/" className="home-tab">Home</a></li>

                            <li className="burger-menu"><i className="fa fa-bars" onClick={this.toResponsive}></i></li>

                        </ul>
                    </div>
            </header>
        </div>)
    }

    verticalMenu = () => {
        return (<div>
            <header className="container-fluid fixed-top">
                    <div>
                        <ul className="nav-bar-links resp-nav-links">

                            <li><a href="/contact-us" className="contact-us-tab">Contact US</a></li>

                            <li><a href="/portfolio" className="portfolio-tab">Portfolio</a></li>

                            <li><a href="/services" className="services-tab">Services</a></li>

                            <li><a href="/about" className="about-tab">About</a></li>

                            <li><a href="/" className="home-tab">Home</a></li>

                            <li className="burger-menu"><i className="fa fa-bars" onClick={this.toResponsive}></i></li>

                        </ul>
                    </div>
            </header>
        </div>)
    }

    render() {
        return (<div>

            {console.log(this.state)}
            {this.state.responsive? this.verticalMenu(): this.hiddenMenu()}
        </div>
        )
    }


}

export default Navbar