import React from 'react'
import logo from '../logo.png'
import ModalForm from './modalForm'

const ContactUs = () => {

    return (
        <div className="contact-us">
            <div className="container">
                <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                    <div class="modal-header">
                    <h3>Let Us Grow Your Business</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <ModalForm />
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 company-description">
                        <img src={logo} alt="logo" />
                        <span>MODERNA</span>
                        <p>
                        Moderna is a custom software development <br />
                        company with an talented engineering workforce
                        </p>
                        <button data-bs-toggle="modal" data-bs-target="#myModal">SEND MESSAGE</button>
                    </div>
                    <div className="col-sm-12 col-md-6 contact-us-way">
                        <h3>
                            Contact us
                        </h3>
                        <div className="line"></div><br/>
                        <div>
                            <ul>
                                <li><i class="fa fa-phone"></i><span>(+20) 1065630331, (+20) 1033722309</span></li>
                                <li><i class="fa fa-envelope"></i><span>moderna.alex.eg@gmail.com</span></li>
                                <li><i class="fa fa-map-marker"></i><span>Alexandria, Egypt</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs