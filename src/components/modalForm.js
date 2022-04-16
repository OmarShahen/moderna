import React, { Component } from 'react'
import './contact-us-form.css'


class ModalForm extends Component {

    render() {
        return(
            <div className="contact-us-form">
               <div className="container">
                        <form className="form-container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div>
                                        <label>Name</label>
                                    </div>
                                    <input type="text" placeholder="Enter Your Name" required/>
                                </div>
                                <div className="col-sm-12">
                                    <div>
                                        <label>Email</label>
                                    </div>
                                    <input type="email" placeholder="Enter Your Email" required/>
                                </div>
                                <div className="col-md-4">

                                </div>
                                <div className="col-sm-12">
                                     <div>
                                        <label>Phone</label>
                                    </div>
                                    <input type="tel"  placeholder="Enter Your Phone" required/>
                                </div>
                                <div className="col-sm-12">
                                    <div>
                                        <label>Country</label>
                                    </div>
                                    <input type="text"  placeholder="Enter Your Country"/>
                                </div>
                                <div className="col-md-4">

                                </div>
                                <div className="col-sm-12">
                                    <div>   
                                        <label>Subject</label>
                                    </div>
                                    <input type="text"  className="subject-field" placeholder="Enter Your Subject" required/>
                                </div>
                                <div className="col-sm-12">
                                    <div>
                                        <label>Message</label>
                                    </div>
                                    <textarea></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <input type="submit" value="SEND" />
                                </div>
                            </div>
                        </form>

                    </div>
               </div>
        )
    }

}

export default ModalForm