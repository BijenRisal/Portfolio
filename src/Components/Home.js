import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import profile from '../Assets/profile.png.jpg';

const Home = () => {
    const [cvUrl, setCvUrl] = useState(localStorage.getItem("cv") || "");

    useEffect(() => {
        const storedCvUrl = localStorage.getItem("cv");
        if (storedCvUrl) {
            setCvUrl(storedCvUrl);
        }
    }, []);

    const openPdfInNewTab = () => {
        if (cvUrl) {
            window.open(cvUrl, '_blank');
        } else {
            alert("No CV uploaded yet!");
        }
    };

    return (
        <section id="home">
            <div className="home-content fade-in-from-left">
                <span className="hello">Hello There!😉</span>
                <span className="hometext">I'm <span className="homename">Bijen</span><br/></span>
                <p className="homeparagraph">I am a beginner web designer and developer with <br />little experience in creating software.</p>
                <Link>
                    <div className="btn-group">
                        <button className="btn" onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Hire me</button>
                        <button className="btn" onClick={openPdfInNewTab}>Download CV</button>
                    </div>
                </Link>
            </div>
            <img src={profile} alt="profile" className="profile" />
        </section>
    );
}

export default Home;
