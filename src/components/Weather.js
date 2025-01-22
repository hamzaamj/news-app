import React, {Component} from "react";

import WeatherToday from "./WeatherToday";
import WeekWeather from "./WeekWeather";
import WeatherDetailTable from "./WeatherDetailTable";


export class Weather extends Component {

    // URL To Fetch Records: https://api.openweathermap.org/data/2.5/weather?q=bahawalpur&appid=process.env.REACT_APP_WEATHER_API_KEY

    constructor(props) {
        super(props);
        document.title = this.props.heading;
        this.state = {
            isLoaded: false, // State to handle lazy load animation
            weatherAPIKey : process.env.REACT_APP_WEATHER_API_KEY,
            city : "bahawalpur",
            cityID : "1183880",
            url : `https://api.openweathermap.org/data/2.5/weather`,
            country: '',
            temp: '',
            min_temp: '',
            max_temp: '',
            feels_like: '',
            humidity: '',
            wind: '',
            condition: '',
            day: "",
            date: "",
            time: "",
            icon: "",
            loading: true
        };
    }


    componentDidMount() {
        // Simulate lazy loading animation
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 100); // Adjust the delay as needed
    }

    async getWeatherReport(city){
        this.props.setProgress(10);
        let url = `${this.state.url}?q=${city}&units=metric&appid=${this.state.weatherAPIKey}`;
        let weatherData = await fetch(url);
        this.props.setProgress(30);
        let weatherParsedData = await weatherData.json();
        this.props.setProgress(50);
        // Setting day and date
        const now = new Date();
        const day = now.toLocaleDateString("en-US", { weekday: "long" }); // e.g., "Thursday"
        const dayOfMonth = now.getDate(); // e.g., 20
        const month = now.toLocaleDateString("en-US", { month: "short" }); // e.g., "Jan"
        const year = now.getFullYear(); // e.g., 2025
        const formattedDate = `${dayOfMonth} ${month} ${year}`; // Combine them as "20 Jan 2025"

        // Convert `dt` to local time
        const currentTime = new Date(weatherParsedData.dt * 1000); // Multiply by 1000 to convert seconds to milliseconds
        let hours = currentTime.getHours(); // Get hours
        const minutes = currentTime.getMinutes(); // Get minutes
        const ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
        hours = hours % 12;
        hours = hours ? hours : 12; // If hour is 0, set to 12
        const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`; // Format time as HH:mm AM/PM
        this.props.setProgress(80);
        // Set state
        this.setState({
            temp: Math.round(weatherParsedData.main.temp),
            min_temp: Math.round(weatherParsedData.main.temp_min),
            max_temp: Math.round(weatherParsedData.main.temp_max),
            feels_like: Math.round(weatherParsedData.main.feels_like),
            condition: weatherParsedData.weather[0].description,
            humidity: weatherParsedData.main.humidity,
            wind: weatherParsedData.wind.speed,
            city: weatherParsedData.name,
            cityID: weatherParsedData.id,
            country: weatherParsedData.sys.country,
            icon: weatherParsedData.weather[0].icon,
            day: day,
            date: formattedDate,
            time: formattedTime,
            loading: false,
        });
        this.props.setProgress(100);
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
                            <WeatherToday
                                getWeatherReport={this.getWeatherReport.bind(this)}
                                url={this.state.url} weatherAPIKey={this.state.weatherAPIKey}
                                city={this.state.city}
                                country={this.state.country}
                                temp={this.state.temp}
                                condition={this.state.condition}
                                day={this.state.day}
                                date={this.state.date}
                                time={this.state.time}
                                icon={this.state.icon}
                                loading={this.state.loading}
                            />
                            <div className="weather-right col-md-8 weather-rounded-border">
                                <WeekWeather
                                    cityID={this.state.cityID} weatherAPIKey={this.state.weatherAPIKey}/>
                                <WeatherDetailTable humidity={this.state.humidity}
                                                    feels_like={this.state.feels_like}
                                                    min_temp={this.state.min_temp}
                                                    max_temp={this.state.max_temp}
                                                    wind={this.state.wind}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Weather;
