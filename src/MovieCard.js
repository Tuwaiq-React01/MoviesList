import React, { Component } from 'react'
import Card from "react-bootstrap/Card" ;
import Button from "react-bootstrap/Button" ;

// import imj from './imgs/heat.jpeg'

export default class MovieCard extends Component {
    render() {
       
        const pth = 'https://image.tmdb.org/t/p/w500'
        const item = this.props.movieArray;
        const crd = this.props.movieArray.map((item, index) => {
            return (
                
                <Card className="border-secondaru col-md-4 mb-4 mt-4" style={{ width: '10rem',backgroundColor:'#fff5fd' }}>
                <Card.Img variant="top" src={pth+item.poster_path} />
                <Card.Body>
                  <Card.Title>{item.original_title}</Card.Title>
                  <Card.Text>
                  Rating : {item.vote_average} <br/>
                  Description : {item.overview} 

                  </Card.Text>
                  <Button variant="secondary">Buy</Button>
                </Card.Body>
              </Card>

            )
        })
        return (
            crd
        )
    }
}
