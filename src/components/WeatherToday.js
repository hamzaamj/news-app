import React, {Component} from "react";
import "../Weather.css";
export class WeatherToday extends Component {

    render() {
        return (
            <div className="weather-left col-md-3 weather-rounded-border">
                <h3>Thursday</h3>
                <p>16 Jan 2025</p>
                <p>Bahawalpur - Pakistan</p>
                <div className="weather-icon">
                    <img style={{width: "200px"}}
                         src="https://img.icons8.com/?size=512&id=qA3w9Yp2vY7r&format=png"
                         alt="Weather Icon"/>
                </div>
                <h1>14°C</h1>
                <p>Sunny</p>
            </div>
        );
    }
}

export default WeatherToday;
