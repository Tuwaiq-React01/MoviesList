import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default class MoviesList extends Component
{
    render() {
        return (
         <div className="Movie">
             <center>
            <Card style={{ width: '18rem' }}>
            <center>{this.props.poster} </center>
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
            {this.props.desc}
            </Card.Text>
            <Button  variant="danger">Book</Button>
            </Card.Body>
            </Card>
            </center>
         </div>
        )
    }
    }