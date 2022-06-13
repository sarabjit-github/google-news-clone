import React, { Component } from "react";
import "./Scss/navbar.css";
// import { AiOutlineSearch } from "react-icons/ai";
import GoogleLogo from "../../Img/google.svg";
import googleSearch from "../../Img/googleSearch.svg";
import googleDrive from "../../Img/googleDrive.svg";
import googlePlay from "../../Img/googlePlay.svg";
import googleMaps from "../../Img/googleMaps.svg";
import googleTranslate from "../../Img/googleTranslate.svg";
import googlePhotos from "../../Img/googlePhotos.svg";
import googleMeet from "../../Img/googleMeet.svg";
import googleCalender from "../../Img/googleCalender.svg";
import googleYoutube from "../../Img/googleYoutube.svg";
import googleFirebase from "../../Img/googleFirebase.svg";
import googleCloud from "../../Img/googleCloud.svg";
import googlePodcast from "../../Img/googlePodcast.svg";
import googleAccount from "../../Img/googleAccount.svg";
import { NavLink } from "react-router-dom";
// import SearchIcon from "../../Img/search.svg";
import { SideNav } from "../SideNav/SideNav";
import SearchPage from "../SearchPage/SearchPage";
import { Loader } from "../Loader/Loader";
// import { News } from "../News/News";

export class Navbar extends Component {
  // gAppD = false;
  constructor() {
    super();
    this.state = {
      gAppsDisplay: false,
      gAppsArray: [
        {
          appUrl: "http://google.com/",
          appName: "Account",
          svgIcon: googleAccount,
        },
        {
          appUrl: "http://google.com/",
          appName: "Search",
          svgIcon: googleSearch,
        },
        {
          appUrl: "http://google.com/",
          appName: "Firebase",
          svgIcon: googleFirebase,
        },
        {
          appUrl: "http://google.com/",
          appName: "YouTube",
          svgIcon: googleYoutube,
        },
        {
          appUrl: "http://google.com/",
          appName: "Drive",
          svgIcon: googleDrive,
        },
        {
          appUrl: "http://google.com/",
          appName: "Photos",
          svgIcon: googlePhotos,
        },
        {
          appUrl: "http://google.com/",
          appName: "Meet",
          svgIcon: googleMeet,
        },
        {
          appUrl: "http://google.com/",
          appName: "Maps",
          svgIcon: googleMaps,
        },
        {
          appUrl: "http://google.com/",
          appName: "Translate",
          svgIcon: googleTranslate,
        },
        {
          appUrl: "http://google.com/",
          appName: "Play",
          svgIcon: googlePlay,
        },
        {
          appUrl: "http://google.com/",
          appName: "Calender",
          svgIcon: googleCalender,
        },
        {
          appUrl: "http://google.com/",
          appName: "Podcasts",
          svgIcon: googlePodcast,
        },
        {
          appUrl: "http://google.com/",
          appName: "Cloud",
          svgIcon: googleCloud,
        },
      ],
      sideNavDisplay: true,
      searchValue: "",
      searchArticles: [],
      showSearchComponent: false,
      loading: false
    };
  }
  showGoogleApps = () => {
    // Instead of using if else conditions I use ! logical not operator
    this.setState({ gAppsDisplay: !this.state.gAppsDisplay });

    console.log(this.state.gAppsDisplay);
  };
  showSideNav = () => {
    this.setState({ sideNavDisplay: !this.state.sideNavDisplay });
  };
  handleSearchChange = (e) => {
    this.setState({ searchValue: e.target.value });
    // console.log(e.target.value)
    // console.log(this.state.searchValue)
  };
  

  // componentDidMount =  ()=>{
  fetchSearchData = async () => {
    let url = `https://newsapi.org/v2/everything?q=${this.state.searchValue}&sortBy=popularity&apiKey=a7e1eb2d6d744385b88e79cd25d4132e`;
    this.setState({ loading: true });
    let res = await fetch(url);
    let data = await res.json();
    let articles = data.articles;
    // setTimeout(() => {
      this.setState({ searchArticles: articles,
      showSearchComponent: true, loading:false, });
    // }, 1500);
    
    // setTimeout(() => {
    //   console.log(this.state.searchArticles);
    // }, 2000);

    // console.log(this.state.searchValue); // if i use simple js function instead of using arrow function then i will get error "state is not defined" because of in simple function this refer to function.
  };
  // }

  handleEnterSearch = (e)=>{
    if(e.keyCode === 13){
      this.fetchSearchData();
    }
  }

  render() {
    return (
      <>

      
        <nav className="upper-navbar">
          <div className="n-left">
            <div
              className="ham-menu"
              title="Main menu"
              onClick={this.showSideNav}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <NavLink to="/" className="main-logo" title="News">
              <img src={GoogleLogo} alt="google logo" />
              <span>News</span>
            </NavLink>
          </div>
          <div className="n-center">
            <div className="n-search">
              <div
                // to="/searchpage"
                className="n-s-logo"
                title="Search"
                onClick={this.fetchSearchData}
              >
                <svg
                  focusable="false"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
                  <path d="M0,0h24v24H0V0z" fill="none"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for topics, locations & sources"
                value={this.state.searchValue}
                onChange={this.handleSearchChange}
                onKeyDown={this.handleEnterSearch}
              />
            </div>
          </div>

          <div className="n-right">
            <div
              className="n-apps"
              title="Google apps"
              onClick={this.showGoogleApps}
            >
              <span
                style={
                  this.state.gAppsDisplay
                    ? { background: "rgba(0,0,0, 0.2)" }
                    : { background: "" }
                }
              >
                <svg className="app-svg" focusable="false" viewBox="0 0 24 24">
                  <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                </svg>
              </span>
            </div>
            <div
              className="google-apps"
              style={
                this.state.gAppsDisplay
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <div className="g-apps-container">
                {/* <a href="http://google.com/" target="_top" className="g-app">
                    <img src={googleSearch} alt="App icon" />
                    <p>Search</p>
                  </a> */}

                {this.state.gAppsArray.map(
                  ({ appUrl, appName, svgIcon }, index) => {
                    return (
                      // <>
                      <a
                        href={appUrl}
                        target="_top"
                        className="g-app"
                        key={index}
                      >
                        <img src={svgIcon} alt="App icon" />
                        <p>{appName}</p>
                      </a>
                      // </>
                    );
                  }
                )}
              </div>
            </div>
            <div className="buttons">
              <a href="/signin" className="sign-btn btn">
                Sign In
              </a>
            </div>
          </div>
        </nav>
        {/* Side Navbar Component */}
        <SideNav sideNavDisplay={this.state.sideNavDisplay} />
        {
          this.state.loading ? <Loader /> :( 
            this.state.searchArticles.length > 0 ?  <SearchPage searchArticles={this.state.searchArticles} searchText={this.state.searchValue} />: ""
            )
        }

        {/* <div className="SearchPageComponent" >
          {
            this.state.showSearchComponent ? <SearchPage searchArticles={this.state.searchArticles} /> : ""
          }
        </div> */}
        {/* {this.state.searchArticles.length > 0 ?  <SearchPage />: ""} */}
      </>
    );
  }
}

// export default Navbar
