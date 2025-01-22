import React from "react";
import "../Weather.css";

const WeatherDetailTable = (props) => {
    return (
        <div className="row" style={{marginTop: "20px"}}>
            <div className="col-md-12 weather-rounded-border" style={{
                paddingTop: "20px",
                paddingBottom: "20px",
            }}>
                <table style={{width: "100%", borderCollapse: "collapse"}}>
                    <tbody>
                    <tr>
                        <td style={{textAlign: "left", fontWeight: "bold"}}>FEELS LIKE</td>
                        <td style={{textAlign: "right", fontWeight: "bold"}}>{props.feels_like}°C</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left", fontWeight: "bold"}}>MAX TEMPERATURE</td>
                        <td style={{textAlign: "right", fontWeight: "bold"}}>{props.max_temp}°C</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left", fontWeight: "bold"}}>MIN TEMPERATURE</td>
                        <td style={{textAlign: "right", fontWeight: "bold"}}>{props.min_temp}°C</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left", fontWeight: "bold"}}>HUMIDITY</td>
                        <td style={{textAlign: "right", fontWeight: "bold"}}>{props.humidity}%</td>
                    </tr>
                    <tr>
                        <td style={{textAlign: "left", fontWeight: "bold"}}>WIND</td>
                        <td style={{textAlign: "right", fontWeight: "bold"}}>{props.wind} km/h</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WeatherDetailTable;
