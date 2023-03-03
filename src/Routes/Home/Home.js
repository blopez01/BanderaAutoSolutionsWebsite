import React from "react";
import '../../Components/PageIntro/PageIntro.css'
import Footer from "../../Components/Footer/Footer";
import './Home.css';

function Home() {
    return (
        <>
            <div className ="page-intro-container home">
                <h1>Got in a wreck?</h1>
                <p>We've got you covered</p>
            </div>
            <div className="services-container">
                <h1 className="services-title">Serving Bandera County for over 15 years</h1>
                <div className="services-wrapper">
                    <div className="services-card">
                        <i className="fa-solid fa-truck-monster fa-8x"/>
                        <h2 className="services-card-title">Truck Accessories</h2>
                        <p className="services-card-description">Protect your vehicle with a large selection of grill guards, front and rear bumper replacements, headache racks and more</p>
                    </div>
                    <div className="services-card">
                        <i className="fa-solid fa-car-burst fa-8x"/>
                        <h2 className="services-card-title">Collision Repair</h2>
                        <p className="services-card-description">Our highly trained staff with over 40 years of experience in the auto body shop industry will gurantee your car will look brand new after any type of collision</p>
                    </div>
                    <div className="services-card">
                        <i className="fa-solid fa-circle-xmark fa-8x"/>
                        <h2 className="services-card-title">Tires</h2>
                        <p className="services-card-description">Order new tires for your vehicle and we'll install them to ensure your replacements are a great fit</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;