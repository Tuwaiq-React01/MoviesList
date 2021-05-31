import React, { Component } from 'react'
import './App.css';
import Movie1 from './Movie1';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './NavbarHeader.js'
import { Col, Row, Container, Navbar ,Nav } from 'react-bootstrap';


export default class App extends Component {
  render() {
    let movies = [
      {
        title: "JOKER",
        description: "Although drawn from the same stable of comics, the skewed dread of the various",
        poster: <img src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" alt="movie photo" height="200px" width="150px" class="center"></img>,

      },
      {
        title: "PROJECT POWER",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
        poster: <img src="https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg" alt="movie photo" height="200px" width="150px" class="center"></img>

      },
      {
        title: "US",
        description: "The “Us” poster communicates the film’s plot more intriguingly than any trailer could.",
        poster: <img src="https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=1213" alt="movie photo" height="200px" width="150px" class="center"></img>

      },
      {
        title: "SPLIT",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
        poster: <img src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/2017-bestposter-split.jpg" alt="movie photo" height="200px" width="150px" rounded class="center"></img>
      },
      {
        title: "THE SPACE",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
        poster: <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/space-movie-poster-template-design-beb2e935de3e1508cb19fc3521961d20_screen.jpg?ts=1573446145" alt="movie photo" height="200px" width="150px" rounded class="center"></img>

      },
      {
        title: "ORIGIN",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
        poster: <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-71650f9b1c11091f5bcd637d4a18d9a7_screen.jpg?ts=1573883916" alt="movie photo" height="200px" width="150px" thumbnail class="center"></img>

      },
      {
      title: "ICE MAN",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
      poster: <img src="https://c8.alamy.com/comp/RRDHRX/iceman-movie-poster-2017-RRDHRX.jpg" alt="movie photo" height="200px" width="150px" class="center"></img>
    },
    {
      title: "FREEDOM",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
      poster: <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1573101130" alt="movie photo" height="200px" width="150px" class="center"></img>
    },
    {
      title: "AFTER",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo.",
      poster: <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362" alt="movie photo" height="200px" width="150px" class="center"></img>
    },
    ]
    const movieList = movies.map((item, index) => {
      return <div  class="col d-flex justify-content-center card text-center">
      < Movie1 key={index} poster={item.poster} title={item.title} description={item.description} />
      </div>
    })
    const movieRow = movieList.map((item) => {
      return <Col sx="4">{item} </Col>
    })
    return (


      <div className="App">
        <NavbarHeader />
        <Container>
          <Col>
            <Row>
              {movieRow}
            </Row>
          </Col>
        </Container>
      </div>


    )
  }
}
