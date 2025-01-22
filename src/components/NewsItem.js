import React, { useState, useEffect } from "react";
import "../App.css";

const NewsItem = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 300); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    const textColor = props.mode === "light" ? "black" : "white";
    const cardBg = props.mode === "light" ? "white" : "#212529";
    const { title, description, imgPath, url } = props;
    return (
        <div
            className={`card-text card my-3 card-hover ${isLoaded ? "fade-in" : "fade-out"}`}
            style={{backgroundColor: cardBg, color: textColor}}
        >

            <div style={{display: "flex", position: "absolute",right: "0"}}>
                <span className="badge rounded-pill bg-primary">{props.source}</span>
            </div>
            <img
                style={{width: "100%", height: "200px"}}
                src={imgPath}
                className="card-img-top card-img-hover"
                alt="..."
            />
            <div className="card-body" style={{textAlign: "left"}}>
                <h5 className="card-title">
                    {title}
                </h5>
                <p className="card-text">
                    {description}
                </p>
                <p className="card-text">
                    <small><b>By:</b> {props.author ? props.author : "Unknown"}</small>
                    <br/>
                    <small><b>Published:</b> {new Date(props.published).toGMTString()}</small>
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

export default NewsItem;
