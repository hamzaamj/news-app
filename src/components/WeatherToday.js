import React, {Component} from "react";
import Spinner from "./Spinner";
import "../Weather.css";


export class WeatherToday extends Component {

    constructor() {
        super();
        this.state = {
            city: '',
            country: '',
            temp: '',
            condition: '',
            day: "",
            date: "",
            icon: "",
            loading: true,
        }
    }

    async componentDidMount() {
        let url = `${this.props.url}?q=${this.props.city}&units=metric&appid=${this.props.weatherAPIKey}`;
        let weatherData = await fetch(url);
        let weatherParsedData = await weatherData.json();
        this.setState({
            temp: Math.round(weatherParsedData.main.temp),
            condition: weatherParsedData.weather[0].main,
            city: weatherParsedData.name,
            country: weatherParsedData.sys.country,
            icon: weatherParsedData.weather[0].icon
        });
        // Setting day and date
        const now = new Date();
        const day = now.toLocaleDateString("en-US", { weekday: "long" }); // e.g., "Thursday"
        const dayOfMonth = now.getDate(); // e.g., 20
        const month = now.toLocaleDateString("en-US", { month: "short" }); // e.g., "Jan"
        const year = now.getFullYear(); // e.g., 2025

        const formattedDate = `${dayOfMonth} ${month} ${year}`; // Combine them as "20 Jan 2025"

        this.setState({
            day,
            date: formattedDate,
            loading: false,
        });
    }
    searchCity  = async () => {
        const city = document.getElementById("city").value;
        let url = `${this.props.url}?q=${city}&units=metric&appid=${this.props.weatherAPIKey}`;
        let weatherData = await fetch(url);
        let weatherParsedData = await weatherData.json();
        if(weatherParsedData.cod === 200) {
            this.setState({
                temp: Math.round(weatherParsedData.main.temp),
                condition: weatherParsedData.weather[0].main,
                city: weatherParsedData.name,
                country: weatherParsedData.sys.country,
                icon: weatherParsedData.weather[0].icon
            });
            // Setting day and date
            const now = new Date();
            const day = now.toLocaleDateString("en-US", { weekday: "long" }); // e.g., "Thursday"
            const dayOfMonth = now.getDate(); // e.g., 20
            const month = now.toLocaleDateString("en-US", { month: "short" }); // e.g., "Jan"
            const year = now.getFullYear(); // e.g., 2025

            const formattedDate = `${dayOfMonth} ${month} ${year}`; // Combine them as "20 Jan 2025"

            this.setState({
                day,
                date: formattedDate,
                loading: false,
            });
        }else{
            alert("City not found");
        }

    }
    render() {
        return (
            <>
                <div className="weather-left col-md-3 weather-rounded-border">
                    {this.state.loading && <Spinner/>}
                    <div className="row">
                        <div className="col-10">
                            <input
                                type="text"
                                id="city"
                                placeholder="Enter City Name"
                                style={{borderRadius: "20px", width: "100%", padding: "10px", marginBottom: "10px"}}
                            />
                        </div>
                        <div className="col-2" style={{marginTop: "8px"}}>
                            <button className="btn btn-primary btn-sm"
                                    onClick={this.searchCity}
                                    style={{marginLeft: "-20px",borderRadius: "10px",}}>
                                Search
                            </button>
                        </div>
                    </div>
                    <h3>{this.state.day}</h3>
                    <p>{this.state.date}</p>
                    <p>{this.state.city} - {this.state.country}</p>
                    {this.state.loading === false && (
                        <div className="weather-icon">
                            <img
                                style={{width: "50%", height: "auto"}}
                                src={`https://openweathermap.org/img/wn/${this.state.icon}.png`}
                                alt="Weather Icon"
                            />
                        </div>
                    )}
                    <h1>{this.state.temp}{this.state.temp > 0 ? "°C" : ""}</h1>
                    <p>{this.state.condition}</p>
                </div>
            </>
        );
    }
}

export default WeatherToday;
