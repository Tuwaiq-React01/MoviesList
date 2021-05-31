import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class MovieCard extends Component {
    
    render() {
        const {poster, name, year, info}= this.props.movie;
        return (
            <div class="card" style={{ width: '30rem' }}>
               <div class="row">
               <div class="col">
               <img class="card-img-top" src={poster} alt="Card image cap" />
               </div>
               <div class="col">
               <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h6>{year}</h6>
                    <p class="card-text">{info}</p>
                    <a href="#" class="btn btn-primary">Book</a>
                </div>
               </div>
               </div>
            </div>
        );
    }
}

export default MovieCard;
