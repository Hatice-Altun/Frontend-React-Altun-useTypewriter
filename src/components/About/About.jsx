import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import "./About.scss";

function About() {

    const [text] = useTypewriter({
        words: ["Frontend Developer", "React Developer", "Software Developer"],
        loop: false,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div className="about ">
            <h1 className="secTitle">Ik ben een <>{text}|</></h1>
        </div>
    );
}

export default About;
