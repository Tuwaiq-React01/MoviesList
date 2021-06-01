import React, { Component } from 'react';
import Movie from '../components/Movie';
import { Row } from 'reactstrap'

export default class Movies extends Component {
    render() {
        const movies = [
            {title: "Law abiding citizen", subtitle: "Action Crime Drama", text: "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free.", image: "https://images-na.ssl-images-amazon.com/images/I/91P8PtNZzfS._SL1500_.jpg"},
            {title: "Law abiding citizen", subtitle: "Action Crime Drama", text: "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free.", image: "https://images-na.ssl-images-amazon.com/images/I/91P8PtNZzfS._SL1500_.jpg"},
            {title: "Law abiding citizen", subtitle: "Action Crime Drama", text: "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free.", image: "https://images-na.ssl-images-amazon.com/images/I/91P8PtNZzfS._SL1500_.jpg"},
            {title: "Law abiding citizen", subtitle: "Action Crime Drama", text: "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free.", image: "https://images-na.ssl-images-amazon.com/images/I/91P8PtNZzfS._SL1500_.jpg"},
            {title: "Law abiding citizen", subtitle: "Action Crime Drama", text: "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free.", image: "https://images-na.ssl-images-amazon.com/images/I/91P8PtNZzfS._SL1500_.jpg"},
            {title: "Law abiding citizen", subtitle: "Action Crime Drama", text: "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free.", image: "https://images-na.ssl-images-amazon.com/images/I/91P8PtNZzfS._SL1500_.jpg"},
        ];

        return (
            <Row>
                {
                    movies.map((movie, index) => <Movie key={index} movie={movie}/>)
                }
            </Row>
        )
    }
}
