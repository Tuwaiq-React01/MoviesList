import React, { Component } from 'react'
import ObejectMovie from './OpjectMovie.js'
let source  = require('./localDB.json') 

export default class MesbahAlDarb extends Component {
    render() {
        let moviesDB =source.results; 
        // let moviesDB = [{ NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic1.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic2.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic2.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic2.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic2.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic2.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic2.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic2.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic2.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic2.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic2.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic2.jpg" },
        // { NameOfMovie: "Dora", Rating: "5", Comment: "Nice", PicOfMovie: "pic/pic3.jpg" }]

        const itmes = moviesDB.map((movie, index) => {
            return (
                <ObejectMovie movie={movie} />
            )

        })

        return (
            <div class="container">
            <div class="col-md-12  justify-content-center">
                <div class="container-fluid row justify-content-left d-flex">
                    {itmes}
                </div>
            </div>

            </div>

        )
    }
}
