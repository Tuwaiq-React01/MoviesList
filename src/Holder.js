import React from 'react'
import Book from './Movie.js'
// import './localDB.json'
var db = require('./localDB.json')

function Holder() {
    const moviesArr =  db.results;

    let movies = moviesArr.map(
        (value, index) => {
        return(
            <div>
                {console.log("here")}
                <Book class="col-md-3" movieProps = {value}/>
            </div>
        )
    });

    return (
        <div class=" row d-flex container">
            {movies}
        </div>
    )
}

export default Holder
