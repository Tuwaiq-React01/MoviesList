import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default class Poster extends Component {
    render() {
        
        return (
            
            <div className="Poster" class=" container row gy-5 col-4 p-3 ">
             
            {/* <h3 claddN> First Movie </h3>
            <p>{this.props.title}</p>
            <p>{this.props.discription}</p>   */}
    


            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.src} height='150-px'width='200px'/>
            <Card.Body>
              <Card.Title> Movie</Card.Title>
              <Card.Text>
               movie discription 
                {/* <Image src={this.props.src} height='150-px'width='200px'/>  */}
              <br/>
                <Button variant="danger">Book</Button>

              </Card.Text>
              </Card.Body>
          </Card>       
            </div>
        )
    }
}
