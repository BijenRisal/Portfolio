import React from "react";
import { Link } from "react-router-dom";

const AddSkill = () => {
    return (
        <div className="container">
            <div className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="content">
                <h1>Add Skills</h1>
                <div className="form">
                    <form action="#">
                        <label htmlFor="skill-name">Skill Name:</label><br />
                        <input type="text" id="skill-name" name="skill-name" /><br />
                        <label htmlFor="skill-image">Skill Image:</label><br />
                        <input type="file" id="skill-image" name="skill-image" /><br />
                        <label htmlFor="skill-description">Skill Description:</label><br />
                        <textarea id="skill-description" name="skill-description" rows="4" cols="50"></textarea><br />
                        <Link to="/adminskills"> <input type="submit" value="Submit" /> </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSkill;
