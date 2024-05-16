import React from "react";
import Ecommerce from '../Assets/ecommerce.png';


const EcommerceProject = () => {
    return (
        <div className="project-description">
            <div className="project-image">
                <img src={Ecommerce} alt="E-commerce Project" />
            </div>
            <div className="project-details">
                <h3>E-commerce</h3>
                <p className="about">Designed and developed an e-commerce website using React.js.</p>
                <div className="technical-sheet">
                    <h4>Technical Sheet</h4>
                    <ul>
                        <li>Frontend: React.js</li>
                        <li>Backend: Node.js</li>
                        <li>Database: MongoDB</li>
                        <li>Deployment: AWS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EcommerceProject;
