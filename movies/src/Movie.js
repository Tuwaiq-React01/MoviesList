import { Component } from "react";
import './Movie.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Movie extends Component{
    render()
    {
        return(
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img className="image" variant="top" src={this.props.imgSrc} />
                <Card.Body>
                <Card.Title>Movie Name: {this.props.title}</Card.Title>
                <Card.Text>
                    <p>{this.props.description}</p>
                    <p>Price : {this.props.price}</p>
                </Card.Text>
                <Button variant="danger">book</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}