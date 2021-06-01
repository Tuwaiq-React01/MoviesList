import { Component } from "react"
import Movie from "./movie"
import { movieList } from "./movieList"
import { Row } from "react-bootstrap"
import './board.css'
const board = (props) => {
    const movies = movieList.map((movie, index) =>
        <Movie  key={index} data={movie}/* ={movie.id} title={movie.title} poster={movie.poster} overview={movie.overview} */ />
        ) 
    return (
        <Row className="justify-content-center">{movies}</Row>
    );
}

export default board;