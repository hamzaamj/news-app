import React from "react";
import {Link} from "react-router-dom";

const SidebarMenu = (props) => {
    const textColor = props.mode === "light" ? "black" : "white";
    return (
        <div className={`sidebar-container bg-${props.mode}`}>
            <button className="toggle-button">
                <i className="fa fa-bars">{props.title}</i>
            </button>
            <div className={`sidebar bg-${props.mode}`}>
                <ul className="menu" style={{color: textColor}}>
                    <li><Link style={{color: textColor}} className="nav-link" aria-current="page" to="/general">Home</Link></li>
                    <li><Link style={{color: textColor}} className="nav-link" to="/about">{props.aboutText}</Link></li>
                    <li><Link style={{color: textColor}} className="nav-link" to="/weather">{props.weatherText}</Link></li>
                    <li><Link style={{color: textColor}} className="nav-link" to="/contact">{props.contactUsText}</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default SidebarMenu;
