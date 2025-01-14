import React, { Component} from "react";
import "../App.css";
import NewsItem from "./NewsItem";

// My API key is: 4e8e8cd66dbe4681a1f0ace32f37db20
export class News extends Component {
    constructor() {
        super();
        const news =[];
        this.state = {
            articles: news
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=4e8e8cd66dbe4681a1f0ace32f37db20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
    }

    render() {
        const textColor = this.props.mode === "light" ? "black" : "white";
        return (
            <>
                <div className="container" style={{textAlign: "center"}}>
                    <h2 style={{color: textColor}}>Latest News</h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                        <NewsItem url={element.url} mode={this.props.mode} title={element.title}
                                                         imgPath={element.urlToImage === null ? '/logo192.png' : element.urlToImage}
                                                         description={element.description}/>
                                    </div>
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <a href="/" target="_blank" className="btn btn-sm btn-primary">Previous</a>
                    <a href="/" target="_blank" className="btn btn-sm btn-primary">Next</a>
                </div>
            </>
        );
    }
}

export default News;
