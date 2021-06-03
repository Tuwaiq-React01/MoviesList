import React, { Component } from 'react'

export default class MovieCard extends Component {
    render() {
        return (
            <div className="card">
                <div>
                <h2><b>{this.props.title}</b></h2>
                <img className="image" src={this.props.image}alt="" />

                <div >
                    <b>
                    <p className="block-text">{this.props.description}</p>
                    </b>
                    
                </div>

                <button className="btn">Book</button>

                </div>

            </div>
        )
    }
}



