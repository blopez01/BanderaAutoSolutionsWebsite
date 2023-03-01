import React from "react";
import '../Components/PageIntro/PageIntro.css'
import Footer from "../Components/Footer/Footer";

function Home() {
    return (
        <>
        <div className ="page-intro-container home">
            <h1>Got in a wreck?</h1>
            <p>We've got you covered</p>
        </div>
        <Footer/>
        </>
    );
}

export default Home;