import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';



export default class Movie extends Component {

    render() {      
        return (
    <div className="App" >
      
        <div className="d1" key={this.props.id} >
           <div className="name"> {this.props.name}</div> 
            <div className="mb-0">Language: {this.props.Language}</div> 
            <div className="mb-0">Rate: {this.props.rate}</div> 
            <div className="mb-0">Type: {this.props.type}</div> 
           <div ><img className="imgS" src= {this.props.image} width="200" height="200"></img> </div>
           <div> <Button variant="info">{this.props.Button} </Button></div>
          
           </div>

    </div>
           
        )
    }
}
