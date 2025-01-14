import React, { Component } from "react";
import "../App.css";

class Alert extends Component {
    render() {
        const { alert } = this.props;

        return (
            <div style={{ height: "70px" }}>
                {alert && (
                    <div className="container my-3">
                        <div
                            className={`alert alert-${alert.type} alert-dismissible fade show`}
                            role="alert"
                        >
                            <strong>
                                {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                            </strong>
                            : {alert.msg}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Alert;
