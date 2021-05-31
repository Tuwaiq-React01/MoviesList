import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import {CardGroup, CardImg} from "react-bootstrap";



function Moviecard(props) {
    return (
        <div className={"col-md-4"}>
        <CardGroup>
            <Card>
                <CardImg height="220" src={props.movie.poster}/>
            </Card>
            <Card>
                <Card.Body>
                    <div>
                    <Card.Title><p style={{fontSize:10}}>{props.movie.title}</p></Card.Title>
                    </div>
                    <div style={{height:150,overflowY:"scroll"}}>
                    <Card.Text >
                        <p style={{fontSize:10}}>{props.movie.overview}</p>
                    </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </CardGroup>
        </div>
    );

}

export default Moviecard;