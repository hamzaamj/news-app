import React, {Component} from "react";
import "../Weather.css";

export class WeatherDetailTable extends Component {
    render() {
        return (
            <div className="row" style={{marginTop: "20px"}}>
                <div className="col-md-12 weather-rounded-border" style={{
                    paddingTop: "30px",
                    paddingBottom: "30px"
                }}>
                    <table style={{width: "100%", borderCollapse: "collapse"}}>
                        <tbody>
                        <tr>
                            <td style={{textAlign: "left", fontWeight: "bold"}}>UV Index</td>
                            <td style={{textAlign: "right"}}>3 (Medium)</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "left", fontWeight: "bold"}}>HUMIDITY</td>
                            <td style={{textAlign: "right"}}>83%</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "left", fontWeight: "bold"}}>WIND</td>
                            <td style={{textAlign: "right"}}>5 km/h</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "left", fontWeight: "bold"}}>Population</td>
                            <td style={{textAlign: "right"}}>4,284,964</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default WeatherDetailTable;
