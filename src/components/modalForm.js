import React, { useRef, useState } from 'react'
import './contact-us-form.css'
import emailjs from '@emailjs/browser'


const ModalForm = () => {

    const [sent, setSent] = useState(false)

    const form = useRef()

    const handleSubmit = e => {
        e.preventDefault()

        emailjs.sendForm('service_y460clf', 'template_gv7ohh8', form.current, 'w1stYnu0JAZ5lOWeR')
        .then(result => setSent(true), error => console.log(error.text))

    }
      

    return(

        <div className="contact-us-form">

            {sent ?
                (
                    <div className="success-email">
                        <p>
                        Received With <strong>Thanks.</strong>
                        </p>
                    </div>
                )
            : 
           <div className="container">
                    <form className="form-container" ref={form} onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <label>Name</label>
                                </div>
                                <input type="text" placeholder="Enter Your Name" name="name" required/>
                            </div>
                            <div className="col-sm-12">
                                <div>
                                    <label>Email</label>
                                </div>
                                <input type="email" placeholder="Enter Your Email" name="email" required/>
                            </div>
                            <div className="col-md-4">

                            </div>
                            <div className="col-sm-12">
                                 <div>
                                    <label>Phone</label>
                                </div>
                                <input type="tel"  placeholder="Enter Your Phone" name="phone" required/>
                            </div>
                            <div className="col-md-4">

                            </div>
                            <div className="col-sm-12">
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
}
           </div>
    )

}

export default ModalForm