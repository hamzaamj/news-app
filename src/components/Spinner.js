import React, { Component } from "react";
import "../App.css";

export default class Spinner extends Component {
    render() {
        return (
            <div id="overlay">
                <div className="cv-spinner">
                    <span className="spinner"></span>
                </div>
            </div>
        );
    }
}
