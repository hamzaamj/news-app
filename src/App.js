import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import News from "./components/News";
import SidebarMenu from "./components/SidebarMenu";
import Weather  from "./components/Weather";
import LoadingBar from "react-top-loading-bar";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const App = () => {
    const [mode, setMode] = useState('light');
    const [modeText, setModeText] = useState('Enable Dark Mode');
    const [alertText, setAlertText] = useState(null);
    const [apiKey, setApiKey] = useState(process.env.REACT_APP_NEWS_API_KEY);
    const [progress, setAppProgress] = useState(0);

    // Method to show alert messages
    const toggleAlert = (message, type) => {
        setAlertText({
            msg: message,
            type: type
        });

        setTimeout(() => {
            setAlertText(null);
        }, 1500);
    };

    // Method to toggle between light and dark modes
    const changeMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            toggleAlert('Dark mode has been enabled', 'success');
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            toggleAlert('Light mode has been enabled', 'success');
        }
    };

    const setProgress = (progress) => {
        setAppProgress(progress);
    }
    return (
        <>
            <Router>
                <div style={{ display: "flex", height: "120vh" }}>
                    <SidebarMenu mode={mode} title="NewsApp" weatherText="Weather Updates" contactUsText="Contact Us" aboutText="About ReactApp"/>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                        <Navbar
                            title="NewsApp"
                            contactUsText="Contact Us"
                            aboutText="About ReactApp"
                            modeText={modeText}
                            changeMode={changeMode}
                            mode={mode}
                        />
                        <LoadingBar
                            color="blue"
                            height={3}
                            progress={progress}
                        />
                        <Alert alert={alertText} />
                        <div style={{ padding: "10px" }}>
                            <Routes>
                                <Route path="/about" element={<AboutUs mode={mode} />} />
                                <Route path="/weather" element={<Weather mode={mode} setProgress={setProgress} heading="Weather Updates" />} />
                                <Route path="/contact" element={<ContactUs mode={mode} />} />
                                <Route exact path="/general" element={<News key="general" country="us" setProgress={setProgress} category="general" mode={mode} apiKey={apiKey} />} />
                                <Route exact path="/business" element={<News key="business" country="us" setProgress={setProgress} category="business" mode={mode} apiKey={apiKey} />} />
                                <Route exact path="/entertainment" element={<News key="entertainment" setProgress={setProgress} country="us" category="entertainment" mode={mode} apiKey={apiKey} />} />
                                <Route exact path="/health" element={<News key="health" country="us" setProgress={setProgress} category="health" mode={mode} apiKey={apiKey} />} />
                                <Route exact path="/science" element={<News key="science" country="us" setProgress={setProgress} category="science" mode={mode} apiKey={apiKey} />} />
                                <Route exact path="/sports" element={<News key="sports" country="us" setProgress={setProgress} category="sports" mode={mode} apiKey={apiKey} />} />
                                <Route exact path="/technology" element={<News key="technology" country="us" setProgress={setProgress} category="technology"  mode={mode} apiKey={apiKey} />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>

        </>
    )
}

export default App;
