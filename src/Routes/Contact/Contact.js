import React from "react";
import '../../Components/PageIntro/PageIntro.css'
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Components/ContactForm/ContactForm";
import './Contact.css';

function Contact() {
    return (
        <>
            <div className ="page-intro-container contact">
                <h1>Contact us</h1>
                <p>Let's get in touch</p>
            </div>
                <div className="contact-form-section">
                    <ContactForm/>
                </div>
            <Footer/>
        </>
    );
}

export default Contact;