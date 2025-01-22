import React, {useState, useEffect} from "react";

import WeatherToday from "./WeatherToday";
import WeekWeather from "./WeekWeather";
import WeatherDetailTable from "./WeatherDetailTable";


const Weather = (props) => {

    // URL To Fetch Records: https://api.openweathermap.org/data/2.5/weather?q=bahawalpur&appid=process.env.REACT_APP_WEATHER_API_KEY
    const[isLoaded, setIsLoaded] = useState(false);
    const[weatherAPIKey, setWeatherAPIKey] = useState(process.env.REACT_APP_WEATHER_API_KEY);
    const[city, setCity] = useState("bahawalpur");
    const[cityID, setCityID] = useState("1183880");
    const[url, setUrl] = useState(`https://api.openweathermap.org/data/2.5/weather`);
    const[country, setCountry] = useState('');
    const[temp, setTemp] = useState('');
    const[min_temp, setMin_temp] = useState('');
    const[max_temp, setMax_temp] = useState('');
    const[feels_like, setFeels_like] = useState('');
    const[humidity, setHumidity] = useState('');
    const[wind, setWind] = useState('');
    const[condition, setCondition] = useState('');
    const[day, setDay] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[icon, setIcon] = useState("");
    const[loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = props.heading;
    });

    const getWeatherReport = async (city) => {
        props.setProgress(10);
        let apiUrl = `${url}?q=${city}&units=metric&appid=${weatherAPIKey}`;
        let weatherData = await fetch(apiUrl);
        props.setProgress(30);
        let weatherParsedData = await weatherData.json();
        props.setProgress(50);
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
        props.setProgress(80);
        // Set state
        setTemp(Math.round(weatherParsedData.main.temp));
        setMin_temp(Math.round(weatherParsedData.main.temp_min));
        setMax_temp(Math.round(weatherParsedData.main.temp_max));
        setFeels_like(Math.round(weatherParsedData.main.feels_like));
        setHumidity(weatherParsedData.main.humidity);
        setWind(weatherParsedData.wind.speed);
        setCondition(weatherParsedData.weather[0].description);
        setDay(day);
        setDate(formattedDate);
        setTime(formattedTime);
        setIcon(weatherParsedData.weather[0].icon);
        setCountry(weatherParsedData.sys.country);
        setCityID(weatherParsedData.id);
        setLoading(false);
        setIsLoaded(true);
        props.setProgress(100);
    }
    const textColor = props.mode === "light" ? "black" : "white";
        return (
            <>
            <div className={`container my-3 ${isLoaded ? "weather-fade-in" : "weather-fade-out"}`} style={{textAlign: "center"}}>
                <h2 style={{color: textColor}}>{props.heading}</h2>
                    <div className="weather-container" style={{color: "white"}}>
                        <div className="row" style={{
                            backgroundImage: "url(https://t3.ftcdn.net/jpg/05/79/86/10/360_F_579861052_KjeAAbyaXOBY6JjxMEPBVJypp2KSb59v.jpg)",
                            notRepeat: "no-repeat",
                            backgroundSize: "cover",
                            borderRadius: "20px"
                        }}>
                            <WeatherToday
                            getWeatherReport={getWeatherReport.bind(this)}
                            url={url} weatherAPIKey={weatherAPIKey}
                            city={city}
                            country={country}
                            temp={temp}
                            condition={condition}
                            day={day}
                            date={date}
                            time={time}
                            icon={icon}
                            loading={loading}
                            />
                            <div className="weather-right col-md-8 weather-rounded-border">
                                <WeekWeather
                                cityID={cityID} weatherAPIKey={weatherAPIKey}/>
                            <WeatherDetailTable humidity={humidity}
                                                feels_like={feels_like}
                                                min_temp={min_temp}
                                                max_temp={max_temp}
                                                wind={wind}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default Weather;
