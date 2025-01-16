import React, {Component} from "react";
import "../Weather.css";
export class WeatherWeather extends Component {
    render() {
        return (
            <div className="row text-center">
                <div className="col-md-2 rounded-border">
                    <img style={{width: "100px"}}
                         src="https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png"
                         alt="Weather Icon"/>
                    <h3>Fri</h3><h3>10°C</h3>
                </div>
                <div className="col-md-2 rounded-border">
                    <img style={{width: "100px"}}
                         src="https://img.icons8.com/?size=512&id=qA3w9Yp2vY7r&format=png"
                         alt="Weather Icon"/>
                    <h3>Sat</h3><h3>14°C</h3>
                </div>
                <div className="col-md-2 rounded-border">
                    <img style={{width: "100px"}}
                         src="https://cdn.creazilla.com/icons/7913380/weather-icon-md.png"
                         alt="Weather Icon"/>
                    <h3>Sun</h3><h3>9°C</h3>
                </div>
                <div className="col-md-2 rounded-border">
                    <img style={{width: "100px"}}
                         src="https://img.icons8.com/?size=512&id=qA3w9Yp2vY7r&format=png"
                         alt="Weather Icon"/>
                    <h3>Mon</h3><h3>12°C</h3>
                </div>
                <div className="col-md-2 rounded-border">
                    <img style={{width: "100%", paddingBottom: "22px"}}
                         src="https://static.vecteezy.com/system/resources/previews/023/258/080/non_2x/weather-icon-cloudy-icon-free-png.png"
                         alt="Weather Icon"/>
                    <h3>Tue</h3><h3>6°C</h3>
                </div>
                <div className="col-md-2 rounded-border">
                    <img style={{width: "100px"}}
                         src="https://img.icons8.com/?size=512&id=qA3w9Yp2vY7r&format=png"
                         alt="Weather Icon"/>
                    <h3>Thu</h3><h3>11°C</h3>
                </div>
            </div>
        );
    }
}
export default WeatherWeather
