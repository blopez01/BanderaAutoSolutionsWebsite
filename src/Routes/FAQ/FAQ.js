import React from "react";
import '../../Components/PageIntro/PageIntro.css'
import Footer from "../../Components/Footer/Footer";
import Accordion from "../../Components/Accordion/Accordion";

function FAQ() {
    return (
        <>
            <div className ="page-intro-container faq">
                <h1>FAQ</h1>
                <p>Frequently Asked Questions</p>
            </div>
            <Accordion />
            <Footer/>
        </>
    );
}

export default FAQ;