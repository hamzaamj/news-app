import React, {Component} from "react";
import WeatherToday from "./WeatherToday";
import WeekWeather from "./WeekWeather";
import WeatherDetailTable from "./WeatherDetailTable";
export class Weather extends Component {
    render() {
        const textColor = this.props.mode === "light" ? "black" : "white";
        return (
            <>
                <div className="container" style={{textAlign: "center"}}>
                    <h2 style={{color: textColor}}>{this.props.heading}</h2>
                    <div className="weather-container" style={{color: "white"}}>
                        <div className="row" style={{
                            backgroundImage: "url(https://t3.ftcdn.net/jpg/05/79/86/10/360_F_579861052_KjeAAbyaXOBY6JjxMEPBVJypp2KSb59v.jpg)",
                            notRepeat: "no-repeat",
                            backgroundSize: "cover",
                            borderRadius: "20px"
                        }}>
                            <WeatherToday/>
                            <div className="weather-right col-md-9 rounded-border">
                                <WeekWeather/>
                                <WeatherDetailTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Weather;
