import React, { Component} from "react";
import "../App.css";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import {Link} from "react-router-dom";

// My API key is: 4e8e8cd66dbe4681a1f0ace32f37db20
export class News extends Component {
    constructor() {
        super();
        const news =[];
        this.state = {
            articles: news,
            page: 1,
            pageSize: 8,
            loading: true
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    handleNextClick = async () => {
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize))){
            this.setState({loading: true});
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }

    }
    handlePrevClick = async () => {
        this.setState({loading: true});
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    capitalize(str) {
        if (!str) return ""; // Handle empty or undefined strings
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    render() {
        const textColor = this.props.mode === "light" ? "black" : "white";
        return (
            <>
                {this.state.loading &&<Spinner/>}
                <div className="container" style={{textAlign: "center"}}>
                    <h2 style={{color: textColor}}>Latest News {this.props.category ? `- ${this.capitalize(this.props.category)}` : ""}</h2>
                    <ul className="news-category">
                        <li className="nav-item">
                            <Link className="nav-link" to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                    </ul>
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
                    <button disabled={this.state.page <= 1 ? true : false} onClick={this.handlePrevClick}
                            className="btn btn-sm btn-primary">&larr; Previous
                    </button>
                    <button
                        disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize) ? true : false}
                        onClick={this.handleNextClick} className="btn btn-sm btn-primary">Next &rarr;</button>
                </div>
            </>
        );
    }
}

export default News;
