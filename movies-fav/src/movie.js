import { Component } from "react"
import { Card, Button } from 'react-bootstrap';

const movie = (props) => {
    return (
        <Card className="card">
            <Card.Img src={props.data.poster}></Card.Img>
            <Card.Body>
                <Card.Title className="movie-title" > {props.data.title} </Card.Title>
                <Card.Text className="movie-text"> {props.data.overview} </Card.Text>
            </Card.Body>
                <Button variant="info" className="mb-3"> More </Button>
        </Card>
    );
}

export default movie;