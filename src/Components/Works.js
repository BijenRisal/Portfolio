import React from "react";
import Ecommerce from '../Assets/ecommerce.png';
import Weather from '../Assets/weather-forecast.png';
import Bookstore from '../Assets/bookstore.png';
import Recipe from '../Assets/recipe.png';
import Task from '../Assets/prioritize.png';
import Portfolio from '../Assets/portfolio.png';
import { Link } from 'react-router-dom';

const Works = () => {
    return (
        <section id="works">
            <h2 className="work-title">My Work</h2>
            <span className="works-description">Here are some of my projects which I have done and completed. Explore a collection of projects ranging from interactive websites to user-friendly applications.</span>
            <div className="projects">
                <div className="project">
                <Link to="/ecommerce">
                    <img src={Ecommerce} alt="Project 1" className="project-image" />
                    <h3>E-commerce</h3>
                    <p>Designed and developed an e-commerce website using React.js.</p>
                    </Link>
                </div>
                <div className="project">
                    <img src={Weather} alt="Project 2" className="project-image" />
                    <h3>Weather Dashboard</h3>
                    <p>Built a weather dashboard application using React.js and.</p>
                </div>
                <div className="project">
                    <img src={Bookstore} alt="Project 3" className="project-image" />
                    <h3>Online Bookstore</h3>
                    <p>Developed a full-stack online bookstore using React.js, Node.js, and MongoDB.</p>
                </div>
                <div className="project">
                    <img src={Recipe} alt="Project 1" className="project-image" />
                    <h3>Recipe Finder</h3>
                    <p>Users can search for recipes by ingredients, cuisine, diet, and meal type.</p>
                </div>
                <div className="project">
                    <img src={Task} alt="Project 2" className="project-image" />
                    <h3>Task Management App</h3>
                    <p>Features include task creation, assignment, deadline tracking, and status updates.</p>
                </div>
                <div className="project">
                    <img src={Portfolio} alt="Project 3" className="project-image" />
                    <h3>Portfolio</h3>
                    <p>Created a personal portfolio website to showcase projects and skills.</p>
                </div>
            </div>
        </section>
    )
}

export default Works;
