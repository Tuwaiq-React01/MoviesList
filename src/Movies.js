import React, { Component } from 'react'
import './App.css';
import './Movies.css';

export default class Movies extends Component {
    render() {
        const movies = this.props.movies.map( m =>
                // <div  style = {{display:"flex", flexWrap:"wrap"}}>
                <div className="movieComp">
                    <img src={m.poster} alt="Poster is not available it this moment " width="180" height="250" style={{borderRadius: "6px 0 0 6px"}}></img>
                    <div className="movieInfo"> 
                        <h4 style={{color:"rgb(56, 7, 105)"}}>{m.title}</h4>
                        <p className="disc">"{m.description}"</p>
                        <button type="button" class=" BookingBtn" > Book </button>
                    </div>
                </div>
            )
        return (
            <div className="MovieContainer">
                {movies}
            </div>
        )
    }
}
