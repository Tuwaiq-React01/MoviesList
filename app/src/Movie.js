import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <Card className="Card" padding-bottom="190px">
                    <Card.Img variant="top" src={this.props.src} height="200px" width="160px"/>
                    <Card.Body>
                        <Card.Title><h3 >{this.props.title}</h3></Card.Title>
                        <Card.Text>
                        <h3>{this.props.desc}</h3>
                        </Card.Text>
                        <Button variant="warning">Booking</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default Movie;


