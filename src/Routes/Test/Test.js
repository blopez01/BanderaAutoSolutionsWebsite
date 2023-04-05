import React from "react";
import '../../Components/PageIntro/PageIntro.css'
import Footer from "../../Components/Footer/Footer";

function Test() {

    const testVar = process.env.REACT_APP_TEST;

    return (
        <>
            {testVar}
            <Footer/>
        </>
    );
}

export default Test;