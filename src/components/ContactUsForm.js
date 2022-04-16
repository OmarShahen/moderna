import React, { useRef } from 'react'
import './contact-us-form.css'
import emailjs from '@emailjs/browser'


const ContactUs = () => {

    const form = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        
        emailjs.sendForm('service_y460clf', 'template_gv7ohh8', form.current, 'w1stYnu0JAZ5lOWeR')
        .then(result => console.log(result.text), error => console.log(error.text))

        console.log('done')

    }
        return(
            <div className="contact-us-form">
               <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>
                            CONTACT <span>US</span>
                            </h1>
                        </div>
                        <form className="form-container" ref={form} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <div>
                                        <label>Name</label>
                                    </div>
                                    <input type="text" placeholder="Enter Your Name" name="name" required/>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div>
                                        <label>Email</label>
                                    </div>
                                    <input type="email" placeholder="Enter Your Email" name="email" required/>
                                </div>
                                <div className="col-md-4">

                                </div>
                                <div className="col-sm-12 col-md-4">
                                     <div>
                                        <label>Phone</label>
                                    </div>
                                    <input type="tel"  placeholder="Enter Your Phone" name="phone" required/>
                                </div>
                                <div className="col-md-4">

                                </div>
                                <div className="col-sm-12 col-md-12">
                                    <div>   
                                        <label>Subject</label>
                                    </div>
                                    <input type="text"  className="subject-field" placeholder="Enter Your Subject" name="subject" required/>
                                </div>
                                <div className="col-sm-12">
                                    <div>
                                        <label>Message</label>
                                    </div>
                                    <textarea name="message"></textarea>
                                </div>
                                <div className="col-sm-12">
                                    <input type="submit" value="SEND" />
                                </div>
                            </div>
                        </form>

                    </div>
               </div>
            </div>
        )
    }





export default ContactUs