import React, { Component } from "react";
import "./style.css";
export default class Movie extends Component {
  render() {
    return (
      <div className="MovieInfo">
        <img
          src={this.props.img}
          className="poster"
          width="150px"
          alt={this.props.name}
        />
        <div className="details">
          <h3 className="MovieName">{this.props.name}</h3>
          <div className="info">
            <span>
              <span className="infoTitle">Language:</span> {this.props.language}
            </span>
            <span>
              <span className="infoTitle">Cast:</span> {this.props.cast}
            </span>
            <span>
              <span className="infoTitle">Censor Ratings:</span>{" "}
              {this.props.censor}
            </span>
          </div>
          <a href="">
            <button>BOOK</button>
          </a>
        </div>
      </div>
    );
  }
}
