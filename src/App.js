import './Scss/app.css';
import { Routes, Route } from 'react-router';
import React, { Component, Suspense, lazy } from 'react';
import { Navbar, } from './Components';
import {Loader} from "./Components/Loader/Loader";
import SearchPage from './Components/SearchPage/SearchPage';
const News = lazy(() => import('./Components'));

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWSDATA_KEY;
  newsApiKey = process.env.REACT_APP_NEWSAPI_KEY;
  alertAppInfo(){
    alert("This is a beta website. There will be bugs, performance issues, and missing content.")
  }
  render() {
    return (
      <>
      <div className="app">

        <div className="info-button" >
          <button title='Info' onClick={this.alertAppInfo}>i</button>
        </div>

        <Navbar newsApiKey={this.newsApiKey} />
        {/* <SideNav /> */}
        <div className="main-container">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<News apiKey={this.apiKey} key="top" category="top" />} />
            <Route exact path="/covid19" element={<News apiKey={this.apiKey} search="covid" />} />
            <Route exact path="/world" element={<News apiKey={this.apiKey} key="world" category="world" />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" category="business" />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" category="technology" />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" category="entertainment" />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" category="health" />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" category="sports" />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" category="science" />} />
            <Route exact path="/searchpage" element={<SearchPage />} />
          </Routes>
        </Suspense>
        </div>
        
        
      </div>
      </>
      
    )
  }
}

