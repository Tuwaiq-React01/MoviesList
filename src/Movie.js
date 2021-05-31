import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        return (
            <div className="col-4 margin-top">
                <div className="row">
                    <div className="col-7"><img src={this.props.Image} alt={this.props.Image} /></div>
                    <div className="col-5 margin left">
                        <p>{this.props.Title}</p>
                        <p>{this.props.Description}</p>
                        <p>{this.props.Cast}</p>
                        <button className="btn btn-warning">Book</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
