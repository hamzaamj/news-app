import React, { Component } from "react";
import "../App.css";

export class NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false, // State to handle lazy load animation
        };
    }

    componentDidMount() {
        // Simulate lazy loading animation
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 300); // Adjust the delay as needed
    }

    render() {
        const textColor = this.props.mode === "light" ? "black" : "white";
        const cardBg = this.props.mode === "light" ? "white" : "#212529";
        const { title, description, imgPath, url } = this.props;
        return (
            <div
                className={`card-text card my-3 card-hover ${this.state.isLoaded ? "fade-in" : "fade-out"}`}
                style={{ backgroundColor: cardBg, color: textColor }}
            >
                <img
                    style={{ width: "100%", height: "200px" }}
                    src={imgPath}
                    className="card-img-top card-img-hover"
                    alt="..."
                />
                <div className="card-body" style={{textAlign: "left"}}>
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <span className="badge rounded-pill bg-primary">{this.props.source}</span>
                    <p className="card-text">
                        {description}
                    </p>
                    <p className="card-text">
                        <small><b>By:</b> {this.props.author ? this.props.author : "Unknown"}</small>
                        <br/>
                        <small><b>Published:</b> {new Date(this.props.published).toGMTString()}</small>
                    </p>
                </div>
                <div className="card-footer">
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                        Read More
                    </a>
                </div>
            </div>
        );
    }
}

export default NewsItem;
