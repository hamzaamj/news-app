import React, {Component} from "react";
import "../Weather.css";

export class WeatherDetailTable extends Component {
    render() {
        return (
            <div className="row" style={{marginTop: "20px"}}>
                <div className="col-md-12 weather-rounded-border" style={{
                    paddingTop: "30px",
                    paddingBottom: "30px",
                }}>
                    <table style={{width: "100%", borderCollapse: "collapse"}}>
                        <tbody>
                        <tr>
                            <td style={{textAlign: "left", fontWeight: "bold"}}>HUMIDITY</td>
                            <td style={{textAlign: "right", fontWeight: "bold"}}>{this.props.humidity}%</td>
                        </tr>
                        <tr>
                            <td style={{textAlign: "left", fontWeight: "bold"}}>WIND</td>
                            <td style={{textAlign: "right", fontWeight: "bold"}}>{this.props.wind} km/h</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default WeatherDetailTable;
