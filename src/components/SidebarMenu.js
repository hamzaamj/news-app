import React, {Component} from "react";
import {Link} from "react-router-dom";
// import "./Sidebar.css"; // Create a CSS file for styling

class SidebarMenu extends Component {
    render() {
        const textColor = this.props.mode === "light" ? "black" : "white";

        return (
            <div className={`sidebar-container bg-${this.props.mode}`}>
                <button className="toggle-button">
                    <i className="fa fa-bars">{this.props.title}</i>
                </button>
                <div className={`sidebar bg-${this.props.mode}`}>
                    <ul className="menu" style={{color: textColor}}>
                        <li><Link style={{color: textColor}} className="nav-link" aria-current="page" to="/general">Home</Link></li>
                        <li><Link style={{color: textColor}} className="nav-link" to="/about">{this.props.aboutText}</Link></li>
                        <li><Link style={{color: textColor}} className="nav-link" to="/contact">{this.props.contactUsText}</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SidebarMenu;
