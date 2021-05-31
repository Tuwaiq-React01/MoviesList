import React, { Component } from 'react'
import MovieList from './MovieList'

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>BooK Movie</h1>
               <MovieList/>
            </div>
        )
    }
}
