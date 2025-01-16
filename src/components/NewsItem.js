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
        console.log(this.state.isLoaded);
        return (
            <div
                className={`card my-3 card-hover ${this.state.isLoaded ? "fade-in" : "fade-out"}`}
                style={{ width: "18rem", backgroundColor: cardBg, color: textColor }}
            >
                <img
                    style={{ width: "100%", height: "200px" }}
                    src={imgPath}
                    className="card-img-top card-img-hover"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: "left" }}>
                        {title
                            ? title.split(" ").slice(0, 10).join(" ") + "..."
                            : "No title available."}
                    </h5>
                    <p className="card-text" style={{ textAlign: "left" }}>
                        {description
                            ? description.split(" ").slice(0, 200).join(" ") + "..."
                            : "No description available."}
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
