import './App.css';
import React, { Component} from "react";
import Navbar from './components/Navbar';
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import News from "./components/News";
import SidebarMenu from "./components/SidebarMenu";
import Weather  from "./components/Weather";
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
            alertText: null, // Alert message
            // apiKey : '1af2f0bcae22463aaad94919159a54f0'
            apiKey : '4e8e8cd66dbe4681a1f0ace32f37db20'
        };
    }
    // apiKey = '4e8e8cd66dbe4681a1f0ace32f37db20';

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
                        <SidebarMenu mode={this.state.mode} title="NewsApp" weatherText="Weather Updates" contactUsText="Contact Us" aboutText="About ReactApp"/>
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
                                    <Route path="/weather" element={<Weather mode={this.state.mode} heading="Weather Updates" />} />
                                    <Route path="/contact" element={<ContactUs mode={this.state.mode} />} />
                                    <Route exact path="/general" element={<News key="general" country="us" category="general" mode={this.state.mode} apiKey={this.state.apiKey} />} />
                                    <Route exact path="/business" element={<News key="business" country="us" category="business" mode={this.state.mode} apiKey={this.state.apiKey} />} />
                                    <Route exact path="/entertainment" element={<News key="entertainment" country="us" category="entertainment" mode={this.state.mode} apiKey={this.state.apiKey} />} />
                                    <Route exact path="/health" element={<News key="health" country="us" category="health" mode={this.state.mode} apiKey={this.state.apiKey} />} />
                                    <Route exact path="/science" element={<News key="science" country="us" category="science" mode={this.state.mode} apiKey={this.state.apiKey} />} />
                                    <Route exact path="/sports" element={<News key="sports" country="us" category="sports" mode={this.state.mode} apiKey={this.state.apiKey} />} />
                                    <Route exact path="/technology" element={<News key="technology" country="us" category="technology"  mode={this.state.mode} apiKey={this.state.apiKey} />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </Router>

            </>
        )
    }
}

