import React, { useState } from "react";
import { Link } from "react-router-dom";

const UploadCV = () => {
    const [cvFile, setCvFile] = useState(null);
    const [cvUrl, setCvUrl] = useState(localStorage.getItem("cv") || "");

    const handleFileChange = (e) => {
        setCvFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (cvFile) {
            const fileUrl = URL.createObjectURL(cvFile);
            setCvUrl(fileUrl);
            localStorage.setItem("cv", fileUrl);
            alert("CV uploaded successfully!");
        }
    };

    return (
        <div className="admin-container">
            <div className="sidebar">
                <Link to="/uploadcv"><button>Upload CV</button></Link>
                <Link to="/adminskills"><button>Skills</button></Link>
                <Link to="/addworks"><button>Works</button></Link>
                <Link to="/addclients"><button>Clients</button></Link>
                <Link to="/"><button>Log Out</button></Link>
            </div>
            <div className="content">
                <h1>Upload Cv</h1>
                <div className="upload-cv">
                    <h2>Upload CV</h2>
                    <input
                        type="file"
                        id="cv-upload"
                        name="cv-upload"
                        accept=".pdf"
                        className="form-input"
                        onChange={handleFileChange}
                    />
                    <br />
                    <button onClick={handleUpload} className="form-submit">
                        Upload
                    </button>
                
                </div>
            </div>
        </div>
    );
};

export default UploadCV;
