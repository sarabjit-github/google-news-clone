import React, { Component } from "react";
import "./Scss/loader.css";

export class Loader extends Component {
  render() {
    return (
      <div className="loader-container">
        <div className="loading-bar"></div>
      </div>
    );
  }
}
