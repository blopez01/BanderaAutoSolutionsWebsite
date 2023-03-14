import React from "react";
import '../../Components/PageIntro/PageIntro.css'
import Footer from "../../Components/Footer/Footer";
import Accordion from "../../Components/Accordion/Accordion";

function FAQ() {
    return (
        <>
            <div className ="page-intro-container faq">
                <h1 className="faq-title">FAQ</h1>
                <p className="faq-title-desc">Frequently Asked Questions</p>
            </div>
            <Accordion />
            <Footer/>
        </>
    );
}

export default FAQ;