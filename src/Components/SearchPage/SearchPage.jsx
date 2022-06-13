
import React, { Component } from "react";
import "./Scss/searchpage.css";
import moment from "moment";

export class SearchPage extends Component {
  // constructor(props){
  //   super(props)
  // }
  
  render() {
    console.log(this.props.searchArticles)
      return (
        <>
          <div className="main-section">
            <div className="news-sec-container search-news-container">
              <main className="news-section">
                {this.props.searchArticles.map(( searchArticle, index ) => {
                  return (
                    <a href={searchArticle.url} key={index} className="a-tag">
                      <article className="s-article">
                        <div className="s-article-text">
                          <h3>{searchArticle.title}</h3>
                          <div className="time-stamp">
                            <span>{searchArticle.author || searchArticle.source.name}</span>
                            <div className="fake-dot"></div>{moment().startOf('hour').fromNow(searchArticle.publishedAt)} ago
                            
                          </div>
                        </div>
                        <div className="s-article-img">
                          <img
                            src={
                              searchArticle.urlToImage ||
                              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png"
                            }
                            alt="news icon"
                          />
                        </div>
                      </article>
                    </a>
                  );
                })}
                {/* <a href="#" className="a-tag"> 
                  <article className="s-article">
                    <div className="s-article-text">
                      <h3>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam, harum.
                      </h3>
                      <p>10 mins ago</p>
                      <div className="time-stamp">
                        <span>Sky News</span>
                        <div className="fake-dot"></div>
                        10 mins ago
                      </div>
                    </div>
                    <div className="s-article-img">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png"
                        alt="news icon"
                      />
                    </div>
                  </article>
                </a> */}
  
                {/* <p>News heading</p> */}
              </main>
              <div className="side-sec-container">
                <aside className="search-side-section">
                  <div className="what-search-box">
                    <div className="what-search">
                      <div className="search-icon">
                        <img
                          src="https://lh3.googleusercontent.com/7VUtCa9aNJw3YcC7C1IhWUu9fgPqZ4xDNMAPIMLBQFKaKzKRhnTyo3VTaM_T8w7qRDqeES0NoA=rw"
                          alt="search icon"
                          width="34px"
                          height="34px"
                        />
                      </div>
                      <div className="search-title">
                        <h2>{this.props.searchText}</h2>
                        <p>Search results</p>
                      </div>
                    </div>
                    <div className="save-button">
                      <button>
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            focusable="false"
                            className="star-svg"
                          >
                            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                          </svg>
                        </span>
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </>
      );
    
  }
}

export default SearchPage;
