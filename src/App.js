import React, { Component } from 'react'
import MovieList from './MovieList'
mport Title from './Titile'
import SeeYou from './SeeYou';

export default class App extends Component {
    render() {
        return (
            <div>
            <Title text="BooK Movie" />
               <MovieList/>
                <SeeYou name="See you again" />
            </div>
        )
    }
}
