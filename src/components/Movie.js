import React, { Component } from 'react';
import { Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default class Movie extends Component {
    render() {
        return (
            <>
                <Col xs="2" className="mt-4">
                    <CardImg
                        top
                        width="100%"
                        src={this.props.movie.image}
                        alt="Movie cover"
                    />
                </Col>
                <Col xs="4">
                    <CardBody>
                        <CardTitle>{this.props.movie.title}</CardTitle>
                        <CardSubtitle>{this.props.movie.subtitle}</CardSubtitle>
                        <CardText>
                            {this.props.movie.text}
                        </CardText>
                        <Button color="primary">Book</Button>
                    </CardBody>
                </Col>
            </>
        )
    }
}
