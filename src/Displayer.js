import React, { Component } from 'react'
import "./Displayer.css"

export default class Displayer extends Component {
    render() {
        
        const display= this.props.movieDisplayer.map((display,index) =>
        <div className ="displayer" key = {index}>
            <img className="img" src={display.image}></img>
            <div>
            <h3 className="title">{display.Title}</h3>
            <p className ="pEditor">{display.description}</p>
            <button className="buttonEditor" variant="warning">Watch now</button>
            </div>
            </div>)
        return (
            <div className ="colDisplayer">
                {display}
                </div>
            
        )
    }
}

