import React, { Component} from "react";
import "../App.css";
export class NewsItem extends Component {

    render() {
        const textColor = this.props.mode === "light" ? "black" : "white";
        const cardBg = this.props.mode === "light" ? "white" : "#212529";
        let {title, description, imgPath,url} = this.props;
        return (
            <>
                <div className="card my-3" style={{width: "18rem", backgroundColor: cardBg, color: textColor}}>
                    <img style={{width: "100%", height: "200px"}} src={imgPath} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" style={{textAlign: "left"}}>
                            {title ? title.split(" ").slice(0, 10).join(" ") + "..." : "No title available."}
                        </h5>
                        <p className="card-text" style={{textAlign: "left"}}>
                            {description ? description.split(" ").slice(0, 200).join(" ") + "..." : "No description available."}
                        </p>
                        <a href={url} target="_blank" className="btn btn-sm btn-primary">View Details</a>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsItem;
