import React from "react";
import '../../Components/PageIntro/PageIntro.css'
import Footer from "../../Components/Footer/Footer";
import env from "@beam-australia/react-env";

function Test() {

    
    return (
        <>
            {env("TEST")}
            {env("TEST2")}
            <Footer/>
        </>
    );
}

export default Test;