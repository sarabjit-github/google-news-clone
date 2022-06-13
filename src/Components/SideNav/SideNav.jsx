import React, { Component } from "react";
import "./Scss/sidenav.css";
import { NavLink } from "react-router-dom";

export class SideNav extends Component {
  // Useless constructor
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <>
        <div className="side-nav-container" style={this.props.sideNavDisplay ? {left: "0"}:{left: "-290px"}}>
          <nav className="side-nav-main">
            <div className="s-n-menu top-menu">
              <NavLink to="/" className="link-tag">
                <span>
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M15.49 13.6c.06-.53.11-1.06.11-1.6s-.05-1.07-.11-1.6h2.7c.13.51.21 1.05.21 1.6s-.08 1.09-.21 1.6h-2.7zm-1.42 4.45c.48-.89.85-1.85 1.1-2.85h2.36c-.76 1.32-1.99 2.34-3.46 2.85zm-.2-4.45h-3.74c-.07-.53-.13-1.06-.13-1.6s.06-1.08.13-1.6h3.74c.07.52.13 1.06.13 1.6s-.06 1.07-.13 1.6zM12 18.37c-.66-.96-1.18-2.02-1.53-3.17h3.06c-.35 1.14-.87 2.21-1.53 3.17zM8.82 8.8H6.46c.77-1.33 1.99-2.34 3.46-2.85-.47.89-.84 1.85-1.1 2.85zm-2.36 6.4h2.36c.26 1 .62 1.96 1.1 2.85-1.46-.51-2.69-1.52-3.46-2.85zm-.65-1.6c-.13-.51-.21-1.05-.21-1.6s.08-1.09.21-1.6h2.7c-.06.53-.11 1.06-.11 1.6s.05 1.07.11 1.6h-2.7zM12 5.63c.66.96 1.18 2.02 1.53 3.17h-3.06c.35-1.14.87-2.21 1.53-3.17zm5.54 3.17h-2.36c-.26-1-.62-1.96-1.1-2.85 1.46.51 2.69 1.53 3.46 2.85zM11.99 4C7.58 4 4 7.58 4 12s3.58 8 7.99 8c4.42 0 8.01-3.58 8.01-8s-3.58-8-8.01-8z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
                </span>
                Top stories
              </NavLink>
              <NavLink to="/foryou" className="link-tag">
                <span>
                  <svg
                    enableBackground="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <g>
                      <rect fill="none" height="24" width="24"></rect>
                    </g>
                    <g>
                      <path d="M22.64,11.14l-9.79-9.79c-0.5-0.5-1.27-0.45-1.72,0l-9.78,9.79c-0.66,0.66-0.26,1.45,0,1.72l9.78,9.79 c0.44,0.44,1.21,0.51,1.72,0l9.79-9.79C22.91,12.59,23.29,11.79,22.64,11.14z M13.84,13.84L12,18l-1.84-4.17L6,12l4.16-1.84L12,6 l1.84,4.16L18,12L13.84,13.84z"></path>
                    </g>
                  </svg>
                </span>
                For you
              </NavLink>
              <NavLink to="/following" className="link-tag">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                  </svg>
                </span>
                Following
              </NavLink>
              <NavLink to="/newsshowcase" className="link-tag">
                <span>
                  <svg
                    enableBackground="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <g>
                      <rect fill="none" height="24" width="24"></rect>
                    </g>
                    <g>
                      <path d="M12,11h6v2h-6V11z M6,17h12v-2H6V17z M6,13h4V7H6V13z M22,5.78v12.44c0,1.54-1.34,2.78-3,2.78H5c-1.64,0-3-1.25-3-2.78 V5.78C2,4.26,3.36,3,5,3h14C20.64,3,22,4.25,22,5.78z M19.99,12V5.78c0-0.42-0.46-0.78-1-0.78H5C4.46,5,4,5.36,4,5.78v12.44 C4,18.64,4.46,19,5,19h14c0.54,0,1-0.36,1-0.78V12H19.99z M12,9h6V7h-6V9z"></path>
                    </g>
                  </svg>
                </span>
                News Showcase
              </NavLink>
              <NavLink to="/savedsearches" className="link-tag">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path>
                  </svg>
                </span>
                Saved searches
              </NavLink>
            </div>
            <div className="fake-line"></div>
            <div className="s-n-menu covid-menu">
              <NavLink to="/covid19" className="link-tag">
                <span>
                  <svg
                    enableBackground="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <rect fill="none" height="24" width="24"></rect>
                    <path d="M10.5,13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13z M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2 z M18,11.09c0,4-2.55,7.7-6,8.83c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z"></path>
                  </svg>
                </span>
                COVID-19
              </NavLink>
            </div>
            <div className="fake-line"></div>
            <div className="s-n-menu category-menu">
              <NavLink to="/india" className="link-tag">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M13.5 3.5h-9v17h2v-7h5.6l.4 2h7v-10h-5.6l-.4-2z"></path>
                  </svg>
                </span>
                India
              </NavLink>
              <NavLink to="/world" className="link-tag">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"></path>
                  </svg>
                </span>
                World
              </NavLink>
              <NavLink to="/localnews" className="link-tag">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M12,2C8.13,2,5,5.13,5,9c0,5.34,4.21,6.79,6.03,12.28C11.17,21.7,11.55,22,12,22s0.83-0.3,0.97-0.72 C14.79,15.79,19,14.34,19,9C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5 C14.5,10.38,13.38,11.5,12,11.5z"></path>
                  </svg>
                </span>
                Your local news
              </NavLink>
              <NavLink to="/business" className="link-tag">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
                  </svg>
                </span>
                Buisness
              </NavLink>
              <NavLink to="/technology" className="link-tag">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M15 9H9v6h6V9zm6 2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path>
                  </svg>
                </span>
                Technology
              </NavLink>
              <NavLink to="/entertainment" className="link-tag">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M18,3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3H18z M8,17H6v-2h2V17z M8,13H6v-2h2V13z M8,9H6V7h2V9z M18,17h-2v-2h2V17 z M18,13h-2v-2h2V13z M18,9h-2V7h2V9z"></path>
                  </svg>
                </span>
                Entertainment
              </NavLink>
              <NavLink to="/sports" className="link-tag">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"></path>
                  </svg>
                </span>
                Sports
              </NavLink>
              <NavLink to="/science" className="link-tag">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M20.72 17.71L15 9.82V5.08h2v-2H7v2h2v4.73L3.14 17.9c-.44.61-.5 1.41-.16 2.08.34.67 1.03 1.09 1.78 1.09h14.5c1.1 0 2-.9 2-2 0-.52-.21-1-.54-1.36z"></path>
                  </svg>
                </span>
                Science
              </NavLink>
              <NavLink to="/health" className="link-tag">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    focusable="false"
                    className="s-n-svg"
                  >
                    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"></path>
                  </svg>
                </span>
                Health
              </NavLink>
            </div>
            <div className="fake-line"></div>
            <div className="s-n-menu setting-menu">
              <div className="lang-menu">
                <NavLink to="/language" className="lang-tag">
                  <p>Language & region</p>
                  <span>English(India)</span>
                </NavLink>
                <NavLink to="/settings" className="link-tag">
                  Settings
                </NavLink>
                <NavLink to="/androidapp" className="link-tag">
                  Get the Android app
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="arrow-svg"
                    >
                      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                    </svg>
                  </span>
                </NavLink>
                <NavLink to="/iosapp" className="link-tag">
                  Get the iOS app
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="arrow-svg"
                    >
                      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                    </svg>
                  </span>
                </NavLink>
                <NavLink to="/feedback" className="link-tag">
                  Send feedback
                </NavLink>
                <NavLink to="/help" className="link-tag">
                  Help
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      focusable="false"
                      className="arrow-svg"
                    >
                      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                    </svg>
                  </span>
                </NavLink>
              </div>
            </div>
          </nav>
          <footer className="footer">
            <NavLink to="/privacy" className="f-tag">
              Privacy
            </NavLink>
            <div className="fake-dot"></div>
            <NavLink to="/terms" className="f-tag">
              Terms
            </NavLink>
            <div className="fake-dot"></div>
            <NavLink to="/aboutgoogle" className="f-tag">
              About
            </NavLink>
          </footer>
        </div>
      </>
    );
  }
}
