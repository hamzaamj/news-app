import React, {useEffect} from "react";

import "../Weather.css";


const WeekWeather = (props) => {
    useEffect(() => {
        loadD3Script();
        initializeWeatherWidget();
    },[props.cityID, props.weatherAPIKey]);

    const loadD3Script = () => {
        // Add the d3.min.js script only if it's not already added
        if (!document.getElementById("d3-script")) {
            const d3Script = document.createElement("script");
            d3Script.id = "d3-script";
            d3Script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js";
            d3Script.async = true;
            d3Script.onload = initializeWeatherWidget;
            document.body.appendChild(d3Script);
        } else {
            initializeWeatherWidget();
        }
    };

    const initializeWeatherWidget = () => {
        // Clear the existing widget parameters
        window.myWidgetParam = [];

        // Ensure the container exists
        const widgetContainer = document.getElementById("openweathermap-widget-11");
        if (!widgetContainer) {
            console.error("Weather widget container not found!");
            return;
        }

        // Clear previous widget content to avoid duplicate elements
        widgetContainer.innerHTML = "";

        // Set up the widget parameters
        window.myWidgetParam.push({
            id: 11,
            cityid: props.cityID, // Use the latest props here
            appid: props.weatherAPIKey,
            units: 'metric',
            containerid: 'openweathermap-widget-11',
        });

        // Dynamically add the widget script
        const weatherWidgetScript = document.createElement("script");
        weatherWidgetScript.async = true;
        weatherWidgetScript.charset = "utf-8";
        weatherWidgetScript.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";

        // Append the script to the body
        document.body.appendChild(weatherWidgetScript);
    };

        return (
            <div className="row text-center row-cols-2 row-cols-lg-6 g-2 g-lg-3"
                 style={{textAlign: "center",padding:"40px 80px"}}>

                <div id="openweathermap-widget-11"></div>
                {/*<div className="col weather-rounded-border weather-card-hover">*/}
                {/*    <div className={`p-3`}>*/}
                {/*        <img style={{width: "100px"}}*/}
                {/*             src="https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png"*/}
                {/*             alt="Weather Icon"/>*/}
                {/*        <h3>Fri</h3><h3>10°C</h3>*/}
                {/*    </div>*/}

                {/*</div>*/}
                {/*<div className="col weather-rounded-border weather-card-hover">*/}
                {/*    <div className={`p-3`}>*/}
                {/*        <img style={{width: "100px"}}*/}
                {/*             src="https://img.icons8.com/?size=512&id=qA3w9Yp2vY7r&format=png"*/}
                {/*             alt="Weather Icon"/>*/}
                {/*        <h3>Sat</h3><h3>14°C</h3>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="col weather-rounded-border weather-card-hover">*/}
                {/*    <div className={`p-3`}>*/}
                {/*        <img style={{width: "100px"}}*/}
                {/*             src="https://cdn.creazilla.com/icons/7913380/weather-icon-md.png"*/}
                {/*             alt="Weather Icon"/>*/}
                {/*        <h3>Sun</h3><h3>9°C</h3>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="col weather-rounded-border weather-card-hover">*/}
                {/*    <div className={`p-3`}>*/}
                {/*        <img style={{width: "100px"}}*/}
                {/*             src="https://img.icons8.com/?size=512&id=qA3w9Yp2vY7r&format=png"*/}
                {/*             alt="Weather Icon"/>*/}
                {/*        <h3>Mon</h3><h3>12°C</h3>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="col weather-rounded-border weather-card-hover">*/}
                {/*    <div className={`p-3`}>*/}
                {/*        <img style={{width: "100%", paddingBottom: "22px"}}*/}
                {/*             src="https://static.vecteezy.com/system/resources/previews/023/258/080/non_2x/weather-icon-cloudy-icon-free-png.png"*/}
                {/*             alt="Weather Icon"/>*/}
                {/*        <h3>Tue</h3><h3>6°C</h3>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="col weather-rounded-border weather-card-hover">*/}
                {/*    <div className={`p-3`}>*/}
                {/*        <img style={{width: "100px"}}*/}
                {/*             src="https://img.icons8.com/?size=512&id=qA3w9Yp2vY7r&format=png"*/}
                {/*             alt="Weather Icon"/>*/}
                {/*        <h3>Thu</h3><h3>11°C</h3>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }

export default WeekWeather;
