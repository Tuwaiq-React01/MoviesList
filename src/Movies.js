import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default class Movies extends Component {
    render() {
        return (
            <div>
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={this.props.img} />
            <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
                {this.props.desc}
             </Card.Text>
             <Button variant="dark" style={{ width: '13rem' }}>book</Button>
             </Card.Body>
        </Card>
        </div>)
    }
}