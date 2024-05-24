import React from "react";
import Ecommerce1 from '../Assets/E-commerce1.png'


const EcommerceProject = () => {
    return (
        <div className="project-description">
            <div className="project-image">
                <img src={Ecommerce1} alt="E-commerce Project" />
            </div>
            <div className="project-details">
                <h3>E-commerce project</h3>
                <p className="about">Designed and developed an e-commerce website using React.js.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ultricies nunc. Nullam posuere urna ut justo convallis, et auctor mi facilisis. Vestibulum vehicula, est a ullamcorper tincidunt, nulla metus malesuada velit, in bibendum orci sapien et sapien.</p>
                <div className="technical-sheet">
                    <h4>Technical Sheet</h4>
                    <ul>
                        <li className="react">Frontend : React.js</li>
                        <li className="react">Backend: Node.js</li>
                        <li className="react">Database: MongoDB</li>
                        <li className="react">Deployment: AWS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EcommerceProject;
