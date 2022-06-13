import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Scss/news.css";
import { NewsArticle } from "../NewsArticle/NewsArticle";
import { Loader } from "../Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      totalResults: 0,
      page: 1
    };
    // this.setState({ loading: true });
    // setTimeout(() => {
    //   this.setState({ loading: false });
    // }, 1000);
    // console.log(this.state.loading);
  }
  // myLoader(){

  // }
  // console.log("constructor")

  async componentDidMount() {
    let url = this.props.search
      ? `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=in&q=${this.props.search}&language=en&page=${this.state.page}`
      : `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=in&category=${this.props.category}&language=en&page=${this.state.page}`;
    this.setState({ loading: true });
    let res = await fetch(url);
    let data = await res.json();
    let articles = data.results;
    this.setState({
      articles: articles,
      loading: false,
      totalResults: data.totalResults,
    });

    // console.log(articles);
  }
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1 })
    let url = this.props.search
      ? `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=in&q=${this.props.search}&language=en&page=${this.state.page}`
      : `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=in&category=${this.props.category}&language=en&page=${this.state.page}`;
    // this.setState({ loading: true });
    let res = await fetch(url);
    let data = await res.json();
    let articles = data.results;
    this.setState({ articles: this.state.articles.concat(articles), totalResults: data.totalResults });
  };

  render() {
    // console.log(this.state.articles[0].image_url)
    // console.log("render");
    // console.log(this.props.category);
    return (
      <>
        {this.state.loading ? (
          <Loader />
        ) : (
          <div className="main-section">
            <div className="news-sec-container ">
              <main className="news-section">
                <div className="news-heading-container">
                  <Link to="/headlines" className="a-tag">
                    <h4>Headlines</h4>
                  </Link>
                  <Link to="/moreheadlines" className="a-tag">
                    <p>More Headlines</p>
                  </Link>
                </div>
                {/* <article className="covid-headline"> */}
                <Link to="/covid19" className="covid-headline a-tag">
                  <p>
                    <span>COVID-19 news: </span>
                    See the latest coverage of the coronavirus
                  </p>
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="arr-svg"
                    >
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>
                    </svg>
                  </div>
                </Link>
                {/* </article> */}
                {/* >>>>>>>>>>>>>> News Articles Start <<<<<<<<<<<<<< */}
                <InfiniteScroll
                  dataLength={this.state.articles.length}
                  next={this.fetchMoreData}
                  hasMore={
                    this.state.articles.length !== this.state.totalResults
                  }
                  loader={<h4>Loading...</h4>}
                >
                  {this.state.articles.map((article, index) => {
                    return (
                      <NewsArticle
                        key={index}
                        newsUrl={article.url}
                        newsTitle={article.title}
                        newsDesc={article.description}
                        imgUrl={article.image_url}
                        newsAuthor={article.source_id}
                        newsPub={article.pubDate}
                        newsLink={article.link}
                        // newsAuth1={article.creator[0]}
                      />
                    );
                  })}
                </InfiniteScroll>
                {/* >>>>>>>>>>>>>> News Articles End <<<<<<<<<<<<<< */}
              </main>
              <div className="side-sec-container">
                <aside className="side-section">
                  <p>I'm Aside section</p>
                </aside>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
