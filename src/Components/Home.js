import React from "react";
import { Link } from "react-scroll";
import profile from '../Assets/profile.png.jpg';
import cvPdf from '../Assets/CV.pdf';

const Home = () => {
    const openPdfInNewTab = () => {
        // Log the path to the PDF for debugging purposes
        console.log("PDF Path:", cvPdf);

        // Open the PDF in a new tab
        window.open(cvPdf, '_blank');
    };

    return (
        <section id="home">
            <div className="home-content  fade-in-from-left">
                <span className="hello">Hello There!😉</span>
                <span className="hometext">I'm <span className="homename">Bijen</span><br/></span>
                <p className="homeparagraph">I am a beginner web designer and developer with <br></br>little experience in creating software.</p>
                <Link>
                    <div className="btn-group">
                        <button className="btn" onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Hire me</button>
                        <button className="btn" onClick={openPdfInNewTab}>Download CV</button> 
                    </div>
                </Link>
            </div>
            <img src={profile} alt="profile" className="profile"/>
        </section>
    );
}

export default Home;
