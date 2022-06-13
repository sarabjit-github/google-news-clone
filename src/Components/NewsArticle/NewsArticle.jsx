import React, { Component } from "react";
import "./Scss/newsarticle.css";
// import { Link } from "react-router-dom";
// import parse from "html-react-parser";
import moment from "moment";
import PropTypes from 'prop-types'

export class NewsArticle extends Component {
  // Useless Constructor
  // constructor(props) {
  //   super(props);
  // }
  static defaultProps = {
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png'
  }
  static propTypes = {
    newsTitle: PropTypes.string,
    imgUrl: PropTypes.string
  }
  render() {
    return (
      <article className="n-article">
        <div className="article-info">
          {/* <div className="m-heading"> */}

          <a href={this.props.newsLink} target="_blank" rel="noopener noreferrer" className="a-tag m-heading">
            <h3>{this.props.newsTitle}</h3>
            <div className="time-stamp">
              <span>{this.props.newsAuthor}</span>
              <div className="fake-dot"></div>{moment().startOf('hour').fromNow(this.props.newsPub)} ago
            </div>
          </a>

          {/* </div> */}
          <a href={this.props.newsLink} target="_blank" rel="noopener noreferrer" className="sub-heading a-tag">
            <div>
              <div className="li-item">
                <div className="li-dot"></div>
                <p>{this.props.newsDesc || this.props.newsTitle.length > 150 ? this.props.newsTitle.slice(0, 151): this.props.newsTitle}</p>
              </div>

              <div className="time-stamp">
                <span>{this.props.newsAuthor}</span>
                <div className="fake-dot"></div>{moment().startOf('hour').fromNow(this.props.newsPub)} ago
              </div>
            </div>
          </a>
        </div>
        <a href={this.props.newsLink} target="_blank" rel="noopener noreferrer" className="article-img">
          <img src={this.props.imgUrl || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png"} alt="News img"/>
        </a>
        <div className="article-view">
          <a href={this.props.newsLink} target="_blank" rel="noopener noreferrer" className="a-tag">
            <img
              src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=s0-w32-rw"
              alt="img"
            />
            <span>View Full coverage</span>
          </a>
          <a href={this.props.newsl} target="_blank" rel="noopener noreferrer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              focusable="false"
              className="arr-svg"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>
            </svg>
          </a>
        </div>
      </article>
    );
  }
}
