import './App.css';
import React, { Component} from "react";
import Navbar from './components/Navbar';
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import News from "./components/News";
import SidebarMenu from "./components/SidebarMenu";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'light', // Light or dark mode
            modeText: 'Enable Dark Mode', // Text for the toggle button
            alertText: null // Alert message
        };
    }

    // Method to show alert messages
    toggleAlert = (message, type) => {
        this.setState({
            alertText: {
                msg: message,
                type: type
            }
        });

        setTimeout(() => {
            this.setState({ alertText: null });
        }, 1500);
    };

    // Method to toggle between light and dark modes
    changeMode = () => {
        if (this.state.mode === 'light') {
            this.setState({
                mode: 'dark',
                modeText: 'Disable Dark Mode'
            });
            document.body.style.backgroundColor = '#042743';
            this.toggleAlert('Dark mode has been enabled', 'success');
        } else {
            this.setState({
                mode: 'light',
                modeText: 'Enable Dark Mode'
            });
            document.body.style.backgroundColor = 'white';
            this.toggleAlert('Light mode has been enabled', 'success');
        }
    };
    render() {
        return (
            <>
                <Router>
                    <div style={{ display: "flex", height: "120vh" }}>
                        {/* Sidebar Menu */}
                        <SidebarMenu mode={this.state.mode}
                                     title="NewsApp"
                                     contactUsText="Contact Us"
                                     aboutText="About ReactApp"/>

                        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                            <Navbar
                                title="NewsApp"
                                contactUsText="Contact Us"
                                aboutText="About ReactApp"
                                modeText={this.state.modeText}
                                changeMode={this.changeMode}
                                mode={this.state.mode}
                            />
                            <Alert alert={this.state.alertText} />
                            <div style={{ padding: "10px" }}>
                                <Routes>
                                    <Route path="/about" element={<AboutUs mode={this.state.mode} />} />
                                    <Route path="/contact" element={<ContactUs mode={this.state.mode} />} />
                                    <Route path="/" element={<News mode={this.state.mode} />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </Router>

            </>
        )
    }
}

