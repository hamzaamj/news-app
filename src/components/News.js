import React, {Component, useEffect,useState} from "react";
import "../App.css";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [loading, setLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsApp`; // Set the document title here
        updateNews();
    }, []);

    const handleNextClick = async () => {
        setPageSize(pageSize + 1);
        updateNews();
    }
    const handlePrevClick = async () => {
        setPageSize(pageSize - 1);
        updateNews();
    }
    const updateNews = async () => {
        props.setProgress(10);
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(80);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setIsLoaded(true);
        props.setProgress(100);
    }
    const capitalize = (str) => {
        if (!str) return ""; // Handle empty or undefined strings
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setPage(page + 1);
    };
    const textColor = props.mode === "light" ? "black" : "white";
    return (
        <>
            {loading && <Spinner/>}
                <div className="container" style={{textAlign: "center",overflow: "hidden"}}>
                    <h2 style={{color: textColor}}>Latest
                        News {props.category ? `- ${capitalize(props.category)}` : ""}</h2>
                    <ul className="news-category">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${props.category === 'general' ? 'cat-btn-highlight' : ''}`}
                                to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${props.category === 'business' ? 'cat-btn-highlight' : ''}`}
                                to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${props.category === 'entertainment' ? 'cat-btn-highlight' : ''}`}
                                to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${props.category === 'health' ? 'cat-btn-highlight' : ''}`}
                                to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${props.category === 'science' ? 'cat-btn-highlight' : ''}`}
                                to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${props.category === 'sports' ? 'cat-btn-highlight' : ''}`}
                                to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${props.category === 'technology' ? 'cat-btn-highlight' : ''}`}
                                to="/technology">Technology</Link>
                        </li>
                    </ul>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length < totalResults}
                        loader={loading ? <Spinner/> : ""}
                        style={{overflow: "hidden"}}
                    >
                        <div className="container">
                            <div className={`row ${isLoaded ? "fade-in" : "fade-out"}`}>
                                {articles.map((element) => {
                                    return <div className="col-md-3 card-group" key={element.url + element.source.name}>
                                        <NewsItem url={element.url} mode={props.mode} title={element.title}
                                                  imgPath={element.urlToImage === null ? '/logo192.png' : element.urlToImage}
                                                  description={element.description}
                                                  author={element.author}
                                                  published={element.publishedAt}
                                                  source={element.source.name}
                                        />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            {/*<div className="container d-flex justify-content-between">*/}
            {/*    <button disabled={page <= 1 ? true : false} onClick={handlePrevClick}*/}
            {/*            className="btn btn-sm btn-primary">&larr; Previous*/}
            {/*    </button>*/}
            {/*    <button*/}
            {/*        disabled={page + 1 > Math.ceil(totalResults / pageSize) ? true : false}*/}
            {/*        onClick={handleNextClick} className="btn btn-sm btn-primary">Next &rarr;</button>*/}
            {/*</div>*/}
        </>
    );
}

export default News;
