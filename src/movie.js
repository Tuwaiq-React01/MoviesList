import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './movie.css';

export default class movie extends Component {
    render() {
        return (
            <div style={{margin:"22px"}}>
                 <Card className="backgraund"  style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="img" src={this.props.img} />
                    <Card.Body>
                    <Card.Title className="title" >{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="primary" className="book">Book</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
