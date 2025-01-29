import React, {useEffect} from "react";

import Spinner from "./Spinner";
import "../Weather.css";


const WeatherToday = (props) => {
    useEffect(() => {
        props.getWeatherReport(props.city);
    }, []);
    const searchCity  = async () => {
        const city = document.getElementById("city").value;
        props.getWeatherReport(city);
    }
   const capitalizeWords = (str) => {
        return str
            .split(' ') // Split the string into an array of words
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
            .join(' '); // Join the words back into a single string
    };

        return (
            <>
                <div className="weather-left col-md-4 weather-rounded-border">
                {props.loading && <Spinner/>}
                    <div className="row">
                        <div className="col-10" style={{paddingRight: "0"}}>
                            <input
                                type="text"
                                id="city"
                                placeholder="Enter City Name"
                                style={{
                                    borderRadius: "20px 0 0 20px",
                                    width: "100%",
                                    padding: "10px",
                                    marginBottom: "10px",
                                    border: "1px solid #ccc"
                                }}
                            />
                        </div>
                        <div className="col-2" style={{paddingLeft: "0", paddingRight: "0"}}>
                            <button
                                className="btn btn-primary btn-sm"
                            onClick={searchCity}
                                style={{
                                    borderRadius: "0 20px 20px 0",
                                    width: "100%",
                                    padding: "11.5px",
                                    textAlign: "left !important",
                                    marginBottom: "10px",
                                    border: "1px solid #ccc",
                                    boxSizing: "border-box", // Ensures padding does not affect the overall width
                                    whiteSpace: "nowrap" // Prevents text from wrapping or overflowing
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                <h3>{props.day}</h3>
                <p>{props.date} - {props.time}</p>
                <p>{capitalizeWords(props.city)} - {props.country}</p>
                {props.loading === false && (
                        <div className="weather-icon">
                            <img
                                style={{width: "50%", height: "auto"}}
                            src={`https://openweathermap.org/img/wn/${props.icon}.png`}
                                alt="Weather Icon"
                            />
                        </div>
                    )}
                <h1>{props.temp}{props.temp > 0 ? "°C" : ""}</h1>
                <p>{capitalizeWords(props.condition)}</p>
                </div>
            </>
        );
    }

export default WeatherToday;
