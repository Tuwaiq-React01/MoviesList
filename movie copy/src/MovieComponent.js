import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class MovieComponent extends Component {


    render() {


        return (
            
                <div class="col">
                    
                        <Card id="card1" style={{ width: '20rem', height: "100xp" }}>
                            <Card.Img variant="top" src={this.props.Movieimage} width="100" />
                            <Card.Body>
                                <Card.Title> {this.props.MovieName}</Card.Title>
                                <Card.Text>
                                    {this.props.MovieDec.substring(0, 50) + ' ...'}

                                </Card.Text>
                                <Button variant="primary">show more</Button>
                            </Card.Body>
                        </Card>

                    

                </div>


           
        )
    }
}