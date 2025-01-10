import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../App.css';

class Navbar extends Component {
    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
                <div className="container-fluid">
                    {/* Use Link instead of href for React Router compatibility */}
                    <Link className="navbar-brand" to="/">{this.props.title}</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{this.props.aboutText}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">{this.props.contactUsText}</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch mx-3">
                            <input
                                className="form-check-input"
                                onClick={this.props.changeMode}
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                style={{ color: this.props.mode === 'light' ? 'black' : 'white' }}
                                htmlFor="flexSwitchCheckDefault"
                            >
                                {this.props.modeText}
                            </label>
                        </div>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;