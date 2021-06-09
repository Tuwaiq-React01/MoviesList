import React, { Component } from 'react'
import DisplayMovies from './DisplayMovies'


export default class Movies extends Component {
    render() {
        console.log(this.props)

        let movieInfo = this.props.movies.map((mappedMovie, i) => (

            <DisplayMovies movie={mappedMovie} key={i} />

        ))
        return (
            <div className="container">
                <div className="row align-items-start">
                    {movieInfo}
                </div>
            </div>
        )
    }
}
