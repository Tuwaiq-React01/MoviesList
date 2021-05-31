import React, { Component } from "react";
import "./Info.css";

export default class Info extends Component {
    render() {
        return (
            <div className="info">
                <div id="title">{this.props.title}</div>
                <br />
                <div id="summury">الوصف: {this.props.summury}</div>
                <br />
                <button className="btn btn-warning">احجز</button>
            </div>
        );
    }
}
