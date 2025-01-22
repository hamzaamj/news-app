import React from "react";
import "../App.css";

const Spinner = () => {
    return (
        <div id="overlay">
            <div className="cv-spinner">
                <span className="spinner"></span>
            </div>
        </div>
    );
}

export default Spinner;
