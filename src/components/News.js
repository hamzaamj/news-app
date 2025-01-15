import React, { Component} from "react";
import "../App.css";
import NewsItem from "./NewsItem";

// My API key is: 4e8e8cd66dbe4681a1f0ace32f37db20
export class News extends Component {
    constructor() {
        super();
        const news =[];
        this.state = {
            articles: news,
            page: 1,
            pageSize: 20,
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4e8e8cd66dbe4681a1f0ace32f37db20&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
        });
    }

    handleNextClick = async () => {
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4e8e8cd66dbe4681a1f0ace32f37db20&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }

    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=4e8e8cd66dbe4681a1f0ace32f37db20&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
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
                    <button disabled={this.state.page <= 1 ? true : false} onClick={this.handlePrevClick} className="btn btn-sm btn-primary">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize) ? true : false} onClick={this.handleNextClick} className="btn btn-sm btn-primary">Next &rarr;</button>
                </div>
            </>
        );
    }
}

export default News;
