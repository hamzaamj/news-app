import React, {Component} from "react";
import WeatherToday from "./WeatherToday";
import WeekWeather from "./WeekWeather";
import WeatherDetailTable from "./WeatherDetailTable";
export class Weather extends Component {

// MY Weather API Key: 6a5d948f340508262ff3a6cca81d0388
// URL To Fetch Records: https://api.openweathermap.org/data/2.5/weather?q=bahawalpur&appid=6a5d948f340508262ff3a6cca81d0388

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false, // State to handle lazy load animation
        };
    }
    weatherAPIKey = "6a5d948f340508262ff3a6cca81d0388";
    city = "bahawalpur";
    url = `https://api.openweathermap.org/data/2.5/weather`;
    componentDidMount() {
        // Simulate lazy loading animation
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 100); // Adjust the delay as needed
    }
    render() {
        const textColor = this.props.mode === "light" ? "black" : "white";
        return (
            <>
                <div className={`container my-3 ${this.state.isLoaded ? "weather-fade-in" : "weather-fade-out"}`} style={{textAlign: "center"}}>
                    <h2 style={{color: textColor}}>{this.props.heading}</h2>
                    <div className="weather-container" style={{color: "white"}}>
                        <div className="row" style={{
                            backgroundImage: "url(https://t3.ftcdn.net/jpg/05/79/86/10/360_F_579861052_KjeAAbyaXOBY6JjxMEPBVJypp2KSb59v.jpg)",
                            notRepeat: "no-repeat",
                            backgroundSize: "cover",
                            borderRadius: "20px"
                        }}>
                            <WeatherToday url={this.url} weatherAPIKey={this.weatherAPIKey} city={this.city}/>
                            <div className="weather-right col-md-9 weather-rounded-border">
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
